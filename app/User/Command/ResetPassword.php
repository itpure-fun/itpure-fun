<?php

namespace App\User\Command;


use App\User\Model\User;
use App\User\Service\UserService;
use Hyperf\Command\Command as HyperfCommand;
use Hyperf\Command\Annotation\Command;
use Hyperf\Di\Annotation\Inject;
use Hyperf\Event\EventDispatcher;
use Hyperf\Redis\Redis;
use Psr\Container\ContainerInterface;
use Symfony\Component\Console\Input\InputOption;
use function Naroat\PhpHelper\Func\set_save_data;

/**
 * @Command
 */
#[Command]
class ResetPassword extends HyperfCommand
{
    /**
     * @var ContainerInterface
     */
    protected $container;

    #[Inject]
    private Redis $redis;

    #[Inject]
    private EventDispatcher $event;

    #[Inject]
    private UserService $userService;

    #[Inject]
    private \Hyperf\Amqp\Producer $producer;

    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;

        parent::__construct('reset:password');
    }

    public function configure()
    {
        parent::configure();
        $this->setDescription('重置密码');
        $this->addArgument('uid', InputOption::VALUE_REQUIRED, '用户id', null);
        $this->addArgument('password', InputOption::VALUE_REQUIRED, '密码', null);
    }

    public function handle()
    {
        $uid = $this->input->getArgument('uid');
        if ($uid == null) {
            $this->error("请传入用户id");
            return false;
        }

        $password = $this->input->getArgument('password');
        if ($uid == null) {
            $this->error("请设置用户密码");
            return false;
        }

        //检查是否已经注册
        $user = User::where('id', $uid)->first();
        if (!$user) {
            $this->error("用户不已存在");
            return false;
        }
        //生成密码
        $password = \Naroat\PhpHelper\Func\create_password($password, $salt);
        $user->password = $password;
        $user->salt = $salt;
        $user->save();

        $this->info("操作成功");
    }
}
