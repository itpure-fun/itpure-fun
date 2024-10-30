<?php

declare (strict_types=1);
namespace App\User\Model;

use Mine\MineModel;

/**
 */
class UserSecret extends MineModel
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected ?string $table = 'user_secret';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected array $fillable = [];
    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected array $casts = [];
}