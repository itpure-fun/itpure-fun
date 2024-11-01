<?php


namespace App\User\Cache;


class ForgetPasswordCodeCache extends AbstractRedis
{
    public $key = 'FORGET_PASSWORD_CODE';

    public function getKey($flag)
    {
        return $this->key . ':' . $flag;
    }
}