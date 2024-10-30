<?php
namespace App\User\Service;

use App\User\Mapper\UserTokenMapper;
use Hyperf\Amqp\Producer;
use Hyperf\Di\Annotation\Inject;
use Hyperf\Redis\Redis;
use App\User\Mapper\UserMapper;
use Mine\Abstracts\AbstractService;
use Xmo\JWTAuth\JWT;
use function Naroat\PhpHelper\Func\set_save_data;

class UserService extends AbstractService
{
    /**
     * @var UserMapper
     */
    public $mapper;

    public function __construct(UserMapper $mapper)
    {
        $this->mapper = $mapper;
    }

    #[Inject]
    public Redis $redis;

    #[Inject]
    public Producer $producer;

    #[Inject]
    public Jwt $jwt;

    #[Inject]
    public UserTokenMapper $userTokenMapper;

    public function getInfo($userId)
    {
        $user = $this->mapper->read($userId);
        if (!$user) {
            throw new \Exception('用户信息异常');
        }
        //签到状态
        /*$users->check_in = 0;
        if (!$this->isCheckIn($users->id)) {
            //未签到
            $users->check_in = 1;
        }*/

        return $user;
    }

    public function updateToken($userId, $token)
    {

        //$userToken = $this->userTokenMapper->model->where('user_id', $userId)->exists();
        $userToken = $this->userTokenMapper->first([
            ['user_id', $userId]
        ]);
        $saveData = [];
        $saveData['token'] = $token;
        $saveData['user_id'] = $userId;
        if ($userToken) {
            $this->userTokenMapper->updateByCondition([
                ['user_id', $userId]
            ], $saveData);
        } else {
            $saveData = set_save_data($saveData);
            $this->userTokenMapper->save($saveData);
        }
        return [
            'token' => $token,
            'exp_time' => $this->jwt->getTTL(),
        ];
    }
}