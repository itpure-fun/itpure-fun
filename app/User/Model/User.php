<?php

namespace App\User\Model;

use Mine\MineModel;

class User extends MineModel
{
    /**
     * The table associated with the model.
     *
     * @var string|null
     */
    protected ?string $table = 'user';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected array $fillable = [
        'id', 'nick_name', 'sex', 'salt', 'password', 'phone', 'email', 'avatar', 'status', 'remarks', 'oauth_openid', 'oauth_type', 'created_at', 'updated_at', 'deleted_at'
    ];
    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected array $casts = [];


    /**
     * 关联: user_secret
     *
     * @return \Hyperf\Database\Model\Relations\HasOne
     */
    public function userSecret()
    {
        return $this->hasOne(UserSecret::class, 'user_id', 'id');
    }

}