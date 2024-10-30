<?php


namespace App\User\Service;

use App\Package\Log;
use App\User\Cache\AuthGithubStateCache;
use App\User\Mapper\UserMapper;
use App\User\Mapper\UserTokenMapper;
use Hyperf\Context\Context;
use Hyperf\Contract\SessionInterface;
use Hyperf\DbConnection\Annotation\Transactional;
use Hyperf\Di\Annotation\Inject;
use Hyperf\Redis\Redis;
use Mine\Abstracts\AbstractService;
use Xmo\JWTAuth\JWT;
use Yurun\OAuthLogin\Github\OAuth2;
use function Naroat\PhpHelper\Func\set_save_data;

class AuthGithubService extends AbstractService
{
    #[Inject]
    private Jwt $jwt;

    #[Inject]
    private Redis $redis;

    #[Inject]
    public UserMapper $userMapper;

    #[Inject]
    public UserTokenMapper $userTokenMapper;

    #[Inject]
    public AuthGithubStateCache $authGithubStateCache;

    #[Inject]
    public SessionInterface $session;

    #[Inject]
    public Log $logger;

    #[Inject]
    public UserService $userService;

    public $githubAuth;

    public function __construct()
    {
        $this->githubAuth = new OAuth2(config('github.auth.client_id'), config('github.auth.client_secret'));
    }

    public function getAuthUrl()
    {
        $url = $this->githubAuth->getAuthUrl();
        $this->session->set('state', $this->githubAuth->state);

        return [
            'url' => $url,
        ];
    }

    public function userinfo()
    {
//        $accessToken = '';
//        $userinfo = $this->githubAuth->getUserInfo($accessToken);
//        return [];
    }

    #[Transactional]
    public function callback($params)
    {
        if (empty($params['code'])) {
            return false;
        }

        $accessToken = $this->githubAuth->getAccessToken('', $params['code'], '');
        //$userinfo = $this->githubAuth->getUserInfo($accessToken); //该方法有问题无法正确获取
        $userinfo = \Naroat\PhpHelper\Func\http_request($this->githubAuth::API_DOMAIN . 'user', 'get', false, [
            'header' => [
                'Authorization' => "token {$accessToken}"
            ]
        ]);

        $userinfo = json_decode($userinfo, true);
        $saveData = set_save_data([
            'nick_name' => $userinfo['name'],
            'oauth_openid' => $userinfo['id'],
            'oauth_type' => 1,
            'email' => $userinfo['email'] ?? '',
            'avatar' => $userinfo['avatar_url'],
            'last_login_time' => date("Y-m-d H:i:s", time()),
        ]);

        //验证是否存在
        $user = $this->userMapper->first([
            ['oauth_type', 1],
            ['oauth_openid', $userinfo['id']],
        ]);
        if ($user) {
            $userId = $user->id;
            $this->userMapper->update($user->id, $saveData);
        } else {
            $userId = $this->userMapper->save($saveData);
        }

        $token = $this->jwt->setScene('api')->getToken([
            'id' => $userId,
        ]);
        $data = $this->userService->updateToken($userId, $token);
        return $data;
    }

    public function logout()
    {
        $this->jwt->logout();
        return true;
    }
}