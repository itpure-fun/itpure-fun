<?php


namespace App\User\Service;


use App\User\Cache\ForgetPasswordCodeCache;
use App\User\Cache\RegisterCodeCache;
use App\User\Cache\ResetPasswordCodeCache;
use App\User\Mapper\UserMapper;
use App\User\Mapper\UserTokenMapper;
use App\Package\Email\src\Email;
use Hyperf\Context\Context;
use Hyperf\DbConnection\Annotation\Transactional;
use Hyperf\DbConnection\Db;
use Hyperf\Di\Annotation\Inject;
use Hyperf\Redis\Redis;
use Mine\Abstracts\AbstractService;
use Xmo\JWTAuth\JWT;
use Psr\Http\Message\ServerRequestInterface;
use App\Package\Utils;
use function Naroat\PhpHelper\Func\create_password;
use function Naroat\PhpHelper\Func\eq_password;
use function Naroat\PhpHelper\Func\set_save_data;

class AuthEmailService extends AbstractService
{
    #[Inject]
    private Email $email;

    #[Inject]
    private RegisterCodeCache $registerCodeCache;

    #[Inject]
    private ResetPasswordCodeCache $resetPasswordCodeCache;

    #[Inject]
    private ForgetPasswordCodeCache $forgetPasswordCodeCache;

    #[Inject]
    private Jwt $jwt;

    #[Inject]
    private Redis $redis;

    #[Inject]
    public UserMapper $userMapper;

    #[Inject]
    public UserTokenMapper $userTokenMapper;

    #[Inject]
    public UserService $userService;

    public function login($param)
    {
        $user = $this->userMapper->first([
            ['email', $param['email']]
        ]);
        if (!$user) {
            throw new \Exception("用户不存在，请注册后登录");
        }

        if ($user->status == 1) {
            throw new \Exception("用户被禁用");
        }

        if (!eq_password($user->password, $param['password'], $user->salt)) {
            throw new \Exception("账号或密码错误");
        }

        try {
            Db::beginTransaction();

            //update last_login_time
            $user->last_login_time = date("Y-m-d H:i:s", time());
            $user->save();

            //insert user_token
            $token = $this->jwt->getToken([
                'id' => $user->id,
                'email' => $user->email,
            ]);
            $data = $this->userService->updateToken($user->id, $token);

            Db::commit();

            return $data;
        } catch (\Exception $e) {
            Db::rollBack();
            throw new \Exception($e->getMessage());
        }
    }

    #[Transactional]
    public function register($param)
    {
        //检查验证码
        $code = $this->redis->get($this->registerCodeCache->getKey($param['email']));
        if ($code != $param['code']) {
            throw new \Exception('验证码错误');
        }

        //检查是否已经注册
        $user = $this->userMapper->first([
            ['email', $param['email']]
        ]);
        if ($user) {
            throw new \Exception('用户已存在');
        }

        //生成密码
        $password = create_password($param['password'], $salt);

        //生命名称
        $nickName = '用户' . rand(100000, 999999);
        //入库
        $insertUsers = [
            'nick_name' => $nickName,
            'password' => $password,
            'salt' => $salt,
            'email' => $param['email'],
            'other_invite_code' => $inviteUser->invite_code ?? '',
        ];
        $insertUsers = set_save_data($insertUsers);
        $this->userMapper->save($insertUsers);
    }

    public function logout()
    {
        $this->jwt->logout();
        return true;
    }

    /**
     * 发送注册验证码
     */
    public function sendRegisterCode($param)
    {
        //检查验证码是否过期
        $code = $this->redis->get($this->registerCodeCache->getKey($param['email']));
        if ($code) {
            throw new \Exception('验证码未过期');
        }

        $user = $this->userMapper->first([
            ['email', $param['email']]
        ]);
        if ($user && $user->status == 1) {
            throw new \Exception('用户被禁用');
        } else if ($user) {
            throw new \Exception('用户已存在');
        }
        //发送验证码
        $code = Utils::getCode();
        if (env('APP_ENV') != 'dev') {
            if (!$this->email->send($param['email'], '注册验证码', $this->email->templateCode($code))) {
                throw new \Exception('邮件发送失败！');
            }
        }

        //记录缓存
        $this->redis->set($this->registerCodeCache->getKey($param['email']), $code, 180);
    }

    /**
     * 根据邮箱修改密码
     *
     * @param $email
     * @param $password
     * @return bool
     * @throws \Exception
     */
    public function updatePasswordByEmail($email, $password)
    {
        //检查是否已经注册
        $user = $this->userMapper->first([
            ['email', $email],
            ['status', 0]
        ]);
        if (!$user) {
            throw new \Exception('用户不存在');
        }

        //生成密码
        $password = create_password($password, $salt);
        $data = set_save_data([
            'password' => $password,
            'salt' => $salt,
        ]);
        $user->save($data);

        return true;
    }

    /**
     * 发送修改密码验证码
     *
     * @param $email
     * @throws \Exception
     */
    public function sendResetPasswordCode($email)
    {
        $code = $this->redis->get($this->resetPasswordCodeCache->getKey($email));
        if ($code) {
            throw new \Exception('验证码未过期');
        }

        $user = $this->userMapper->first([
            ['email', $email],
            ['status', 0]
        ]);
        if (!$user) {
            throw new \Exception('用户不存在！');
        }
        //发送验证码
        $code = Utils::getCode();
        if (env('APP_ENV') != 'dev') {
            if (!$this->email->send($email, '修改密码验证码', $this->email->templateCode($code))) {
                throw new \Exception('邮件发送失败！');
            }
        }
        //记录缓存
        $this->redis->set($this->resetPasswordCodeCache->getKey($email), $code, 180);
    }

    /**
     * 修改密码
     *
     * @param $param
     * @return bool
     * @throws \Exception
     */
    public function resetPassword($param)
    {
        $contextResult = Context::get(ServerRequestInterface::class);
        $email = $contextResult->getAttribute('email');
        //检查验证码
        $code = $this->redis->get($this->resetPasswordCodeCache->getKey($email));
        if ($code != $param['code']) {
            throw new \Exception('验证码错误');
        }

        $this->updatePasswordByEmail($email, $param['password']);

        //修改成功，将验证码失效
        $this->redis->del($this->resetPasswordCodeCache->getKey($email));

        return true;
    }

    /**
     * 发送忘记密码验证码
     *
     * @param $email
     * @throws \Exception
     */
    public function sendForgetPasswordCode($email)
    {
        $code = $this->redis->get($this->forgetPasswordCodeCache->getKey($email));
        if ($code) {
            throw new \Exception('验证码未过期');
        }

        $user = $this->userMapper->first([
            ['email', $email],
            ['status', 0]
        ]);
        if (!$user) {
            throw new \Exception('用户不存在！');
        }
        //发送验证码
        $code = Utils::getCode();
        if (env('APP_ENV') != 'dev') {
            if (!$this->email->send($email, '忘记密码验证码', $this->email->templateCode($code))) {
                throw new \Exception('邮件发送失败！');
            }
        }
        //记录缓存
        $this->redis->set($this->forgetPasswordCodeCache->getKey($email), $code, 180);
    }

    /**
     * 忘记密码
     *
     * @param $param
     * @return bool
     * @throws \Exception
     */
    public function forgetPassword($param)
    {
        //检查验证码
        $code = $this->redis->get($this->forgetPasswordCodeCache->getKey($param['email']));
        if ($code != $param['code']) {
            throw new \Exception('验证码错误');
        }

        $this->updatePasswordByEmail($param['email'], $param['password']);

        //修改成功，将验证码失效
        $this->redis->del($this->forgetPasswordCodeCache->getKey($param['email']));

        return true;
    }
}