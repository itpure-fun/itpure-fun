<?php

namespace App\User\Cache;


class ResetPasswordCodeCache extends AbstractRedis
{
    public $key = 'RESET_PASSWORD_CODE';

    public function getKey($flag)
    {
        return $this->key . ':' . $flag;
    }
}