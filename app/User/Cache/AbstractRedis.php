<?php


namespace App\User\Cache;


use Hyperf\Di\Annotation\Inject;
use Hyperf\Redis\Redis;

abstract class AbstractRedis
{
    #[Inject]
    protected Redis $redis;
}