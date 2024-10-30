<?php

namespace App\User\Cache;


class AuthGithubStateCache extends AbstractRedis
{
    public $key = 'AUTH_GITHUB_STATE';

    public function getKey($flag)
    {
        return $this->key . ':' . $flag;
    }
}