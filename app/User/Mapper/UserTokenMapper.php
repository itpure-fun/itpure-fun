<?php
declare(strict_types=1);


namespace App\User\Mapper;

use App\User\Model\User;
use App\User\Model\UserToken;
use Hyperf\Database\Model\Builder;
use Mine\Abstracts\AbstractMapper;

/**
 * 用户Token表Mapper类
 */
class UserTokenMapper extends AbstractMapper
{
    /**
     * @var User
     */
    public $model;

    public function assignModel()
    {
        $this->model = UserToken::class;
    }
}