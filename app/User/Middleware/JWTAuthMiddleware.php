<?php

declare(strict_types=1);

namespace App\User\Middleware;

use App\User\Model\User;
use App\User\Model\UserSecret;
use Hyperf\Di\Annotation\Inject;
use Hyperf\HttpServer\Contract\ResponseInterface as HttpResponse;
use Xmo\JWTAuth\JWT;
use Psr\Container\ContainerInterface;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;

class JWTAuthMiddleware implements MiddlewareInterface
{
    /**
     * @var ContainerInterface
     */
    protected $container;

    #[Inject]
    private Jwt $jwt;

    #[Inject]
    protected HttpResponse $response;

    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
    }

    public function process(ServerRequestInterface $request, RequestHandlerInterface $handler): ResponseInterface
    {
        try {
            if (!$this->jwt->checkToken(null, 'api')) {
                throw new \Exception("请登录！");
            }
            $data = $this->jwt->getParserData();
            $users = User::find($data['id']);
            if (!$users) {
                throw new \Exception("请登录！");
            }
            if ($users->status == 1) {
                throw new \Exception('账号被禁用！');
            }
            $request = $request->withAttribute('user_id', $data['id']);
            \Hyperf\Context\Context::set(ServerRequestInterface::class, $request);
            return $handler->handle($request);
        } catch (\Exception $e) {
            return $this->response->json(['code' => 401, 'message' => $e->getMessage(), 'data' => []]);
        }
    }
}