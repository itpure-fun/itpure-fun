<?php

declare(strict_types=1);

namespace App\Avenue\Command;

use App\Avenue\Service\AvenueGoogleAuthService;
use App\Package\Log;
use App\Package\Upload\Upload;
use App\Package\Utils;
use Firebase\JWT\JWT;
use Google\Task\Composer;
use Hyperf\Command\Command as HyperfCommand;
use Hyperf\Command\Annotation\Command;
use Hyperf\Di\Annotation\Inject;
use Psr\Container\ContainerInterface;
use Google;
use Yurun\Util\HttpRequest;
use function Naroat\PhpHelper\Func\create_password;
use function Naroat\PhpHelper\Func\set_save_data;

#[Command]
class TestCommand extends HyperfCommand
{

    #[Inject]
    public HttpRequest $http;

    public function __construct(protected ContainerInterface $container)
    {
        parent::__construct('test:cmd');
    }

    public function configure()
    {
        parent::configure();
        $this->setDescription('Hyperf Demo Command');
    }

    public function handle()
    {
        // 目标URL
//        $url = 'https://itpure.fun/';
        $url = 'http://localhost:3000';

        // 初始化cURL会话
        $ch = curl_init($url);

        // 设置cURL选项
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);

        // 执行cURL会话
        $html = curl_exec($ch);

        // 关闭cURL会话
        curl_close($ch);

        // 要保存的文件名
        $filename = 'example.html';

        // 将HTML内容写入文件
        file_put_contents($filename, $html);

        echo "HTML内容已保存到: " . $filename;
        echo PHP_EOL;
        exit;



        $data = set_save_data(['a' => 'b']);
        var_dump($data);
        exit;
        create_password('123', $slat);
        var_dump($slat);exit;
        $len = 5;
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLen = strlen($characters);
        $slat = '';
        for ($i = 0; $i < $len; $i++) {
            $slat .= $characters[rand(0, $charactersLen - 1)];
        }
        var_dump($slat);exit;
//        var_dump(1800000 / 720);
        var_dump(1800000 / 480);
        var_dump(120 * 15000);
        exit;
        $num = 36000;
        $sum = 36000;
        for ($i=1; $i<60; $i++) {   //59
            $num += $num * 0.03;
            $sum += $num;
            var_dump($num);
        }
//        var_dump(36000 * 0.03);
        var_dump($sum);
        exit;
        $data = [
            'aa' => 11
        ];
        $tags = '1';
        var_dump(!empty($tags));
        exit;

        $this->uploadImg();
        exit;

        $ser = make(AvenueGoogleAuthService::class);
        var_dump($ser->authUrl());
//        var_dump($ser->tokenInfo());
        var_dump('text:cmd');
    }

    public function uploadImg()
    {
        $imgUrl = 'https://www.baidu.com/favicon.ico';
        $upload = new Upload();
        $upload_remote_path = 'public/uploads/product/logo/';
        $finally_path = $upload->toOssByUrl($imgUrl, $upload_remote_path);
        var_dump($finally_path);
        exit;
    }
}