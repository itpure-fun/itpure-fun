<?php

declare(strict_types=1);

namespace App\User\Controller\Api;

use App\Package\Verify;
use App\User\Service\AuthEmailService;
use Hyperf\Di\Annotation\Inject;
use Hyperf\HttpServer\Contract\RequestInterface;
use Hyperf\HttpServer\Contract\ResponseInterface;
use Mine\MineController;
use Hyperf\HttpServer\Annotation\RequestMapping;
use Hyperf\HttpServer\Annotation\Controller;
/**
 * 身份认证方式：邮件方式
 */
#[Controller(prefix: 'v1/auth/email')]
class AuthEmailController extends MineController
{
    #[Inject]
    private AuthEmailService $authService;

    #[Inject]
    public Verify $verify;

    #[RequestMapping(path: "login", methods: "post")]
    public function login(RequestInterface $request, ResponseInterface $response)
    {
        $params = $this->verify->requestParams([
            ['email', ''],
            ['password', ''],
        ], $this->request);

        try {
            $this->verify->check($params, [
                'email' => 'required|email',
                'password' => 'required|between:32,32',
            ], []);

            $list = $this->authService->login($params);
            return $this->success($list);
        } catch (\Exception $e) {
            return $this->error($e->getMessage());
        }
    }

    #[RequestMapping(path: "register", methods: "post")]
    public function register(RequestInterface $request, ResponseInterface $response)
    {
        $params = $this->verify->requestParams([
            //['nick_name', ''],
            ['email', ''],
            ['code', ''],
            ['password', ''],
            ['password_confirmation', ''],
            ['invite_code', ''],
        ], $this->request);

        try {
            $this->verify->check($params, [
                //'nick_name' => 'required',
                'email' => 'required|email',
                'code' => 'required',
                'password' => 'required|confirmed|between:32,32',
                'password_confirmation' => 'required',
                'invite_code' => 'between:12,12',
            ], [
                'invite_code.between' => '邀请码无效'
            ]);

            $this->authService->register($params);

            return $this->success([]);
        } catch (\Exception $e) {
            return $this->error($e->getMessage());
        }
    }

    /**
     * 注册 - 发送短信验证码
     */
    #[RequestMapping(path: "sendRegisterCode", methods: "post")]
    public function sendRegisterCode()
    {
        $params = $this->verify->requestParams([
            ['email', ''],
        ], $this->request);

        try {
            $this->verify->check($params, [
                'email' => 'required|email',
            ], [
                'email.required' => '请输入邮箱地址'
            ]);
            $this->authService->sendRegisterCode($params);
            return $this->success([]);
        } catch (\Exception $e) {
            return $this->error($e->getMessage());
        }
    }

    /**
     * 修改密码 - 发送短信验证码
     */
    #[RequestMapping(path: "sendResetPasswordCode", methods: "post")]
    public function sendResetPasswordCode()
    {
        try {
            $email = $this->request->getAttribute('email');
            $this->authService->sendResetPasswordCode($email);
            return $this->success([]);
        } catch (\Exception $e) {
            return $this->error($e->getMessage());
        }
    }

    /**
     * 修改密码
     */
    #[RequestMapping(path: "resetPassword", methods: "post")]
    public function resetPassword()
    {
        $params = $this->verify->requestParams([
            ['code', ''],
            ['password', ''],
            ['password_confirmation', ''],
        ], $this->request);

        try {
            $this->verify->check($params, [
                'code' => 'required',
                'password' => 'required|confirmed|between:32,32',
                'password_confirmation' => 'required',
            ], []);

            $this->authService->resetPassword($params);

            return $this->success([]);
        } catch (\Exception $e) {
            return $this->error($e->getMessage());
        }
    }

    /**
     * 忘记密码 - 发送短信验证码
     */
    #[RequestMapping(path: "sendForgetPasswordCode", methods: "post")]
    public function sendForgetPasswordCode()
    {
        $params = $this->verify->requestParams([
            ['email', ''],
        ], $this->request);
        try {
            $this->verify->check($params, [
                'email' => 'required|email',
            ], []);
            $email = $params['email'];
            $this->authService->sendForgetPasswordCode($email);
            return $this->success([]);
        } catch (\Exception $e) {
            return $this->error($e->getMessage());
        }
    }

    /**
     * 忘记密码
     */
    #[RequestMapping(path: "forgetPassword", methods: "post")]
    public function forgetPassword()
    {
        $params = $this->verify->requestParams([
            ['email', ''],
            ['code', ''],
            ['password', ''],
            ['password_confirmation', ''],
        ], $this->request);

        try {
            $this->verify->check($params, [
                'email' => 'required|email',
                'code' => 'required',
                'password' => 'required|confirmed|between:32,32',
                'password_confirmation' => 'required',
            ], []);

            $this->authService->forgetPassword($params);

            return $this->success([]);
        } catch (\Exception $e) {
            return $this->error($e->getMessage());
        }
    }


    #[RequestMapping(path: "logout", methods: "post")]
    public function logout()
    {
        $this->authService->logout();
        return $this->success([]);
    }
}
