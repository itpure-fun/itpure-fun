<?php

declare(strict_types=1);

namespace App\User\Controller\Api;

use App\Package\Verify;
use App\User\Service\AuthEmailService;
use App\User\Service\AuthGithubService;
use Hyperf\Di\Annotation\Inject;
use Hyperf\HttpServer\Annotation\Middleware;
use Hyperf\HttpServer\Contract\RequestInterface;
use Hyperf\HttpServer\Contract\ResponseInterface;
use Hyperf\Session\Middleware\SessionMiddleware;
use Mine\MineController;
use Hyperf\HttpServer\Annotation\RequestMapping;
use Hyperf\HttpServer\Annotation\Controller;
/**
 * auth github
 */
#[Controller(prefix: 'v1/auth/github')]
#[Middleware(SessionMiddleware::class)]
class AuthGithubController extends MineController
{
    #[Inject]
    private AuthGithubService $authService;

    #[Inject]
    public Verify $verify;

    #[RequestMapping(path: "getAuthUrl", methods: "post")]
    public function getAuthUrl(RequestInterface $request, ResponseInterface $response)
    {
        try {
            $data = $this->authService->getAuthUrl();
            return $this->success($data);
        } catch (\Exception $e) {
            return $this->error($e->getMessage());
        }
    }

    public function userinfo()
    {
        try {
            $data = $this->authService->userinfo();
            return $this->success($data);
        } catch (\Exception $e) {
            return $this->error($e->getMessage());
        }
    }

    #[RequestMapping(path: "callback", methods: ['get', 'post'])]
    public function callback(RequestInterface $request, ResponseInterface $response)
    {
        try {
            $data = $this->authService->callback($request->all());
            return $this->success($data);
        } catch (\Exception $e) {
            return $this->error($e->getMessage());
        }
    }
}
