<?php

declare(strict_types=1);

namespace App\User\Controller\Api;

use App\User\Middleware\CorsMiddleware;
use App\User\Middleware\JWTAuthMiddleware;
use App\User\Service\UserService;
use Hyperf\Di\Annotation\Inject;
use Hyperf\HttpServer\Annotation\Middleware;
use Hyperf\HttpServer\Contract\RequestInterface;
use Hyperf\HttpServer\Contract\ResponseInterface;
use Mine\MineController;
use Hyperf\HttpServer\Annotation\Controller;
use Hyperf\HttpServer\Annotation\RequestMapping;

#[Controller(prefix: 'v1/user')]
#[Middleware(CorsMiddleware::class)]
class UserController extends MineController
{
    #[Inject]
    private UserService $userService;

    #[RequestMapping(path: "info", methods: "get")]
    #[Middleware(JWTAuthMiddleware::class)]
    public function info()
    {
        try {
            $userId = $this->request->getAttribute('user_id');
            $data = $this->userService->getInfo($userId);
            return $this->success($data);
        } catch (\Exception $e) {
            return $this->error($e->getMessage());
        }
    }
}
