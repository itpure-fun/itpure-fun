<?php
declare(strict_types=1);
/**
 * MineAdmin is committed to providing solutions for quickly building web applications
 * Please view the LICENSE file that was distributed with this source code,
 * For the full copyright and license information.
 * Thank you very much for using MineAdmin.
 *
 * @Author X.Mo<root@imoi.cn>
 * @Link   https://gitee.com/xmo/MineAdmin
 */

namespace App\User\Mapper;

use App\User\Model\User;
use Hyperf\Database\Model\Builder;
use Mine\Abstracts\AbstractMapper;

/**
 * 用户表Mapper类
 */
class UserMapper extends AbstractMapper
{
    /**
     * @var User
     */
    public $model;

    public function assignModel()
    {
        $this->model = User::class;
    }

    /**
     * 搜索处理器
     * @param Builder $query
     * @param array $params
     * @return Builder
     */
    public function handleSearch(Builder $query, array $params): Builder
    {
        // 用户id
        if (isset($params['id']) && filled($params['id'])) {
            $query->where('id', '=', $params['id']);
        }

        // 用户昵称
        if (isset($params['nick_name']) && filled($params['nick_name'])) {
            $query->where('nick_name', 'like', '%'.$params['nick_name'].'%');
        }

        // 性别 0男1女
        if (isset($params['sex']) && filled($params['sex'])) {
            $query->where('sex', '=', $params['sex']);
        }

        // 密码盐
        if (isset($params['salt']) && filled($params['salt'])) {
            $query->where('salt', 'like', '%'.$params['salt'].'%');
        }

        // 密码
        if (isset($params['password']) && filled($params['password'])) {
            $query->where('password', 'like', '%'.$params['password'].'%');
        }

        // 手机
        if (isset($params['phone']) && filled($params['phone'])) {
            $query->where('phone', 'like', '%'.$params['phone'].'%');
        }

        // 邮箱
        if (isset($params['email']) && filled($params['email'])) {
            $query->where('email', 'like', '%'.$params['email'].'%');
        }

        // 头像
        if (isset($params['avatar']) && filled($params['avatar'])) {
            $query->where('avatar', 'like', '%'.$params['avatar'].'%');
        }

        // 用户状态 0正常 1禁用
        if (isset($params['status']) && filled($params['status'])) {
            $query->where('status', '=', $params['status']);
        }

        // 备注
        if (isset($params['remarks']) && filled($params['remarks'])) {
            $query->where('remarks', 'like', '%'.$params['remarks'].'%');
        }

        // 创建时间
        if (isset($params['created_at']) && filled($params['created_at']) && is_array($params['created_at']) && count($params['created_at']) == 2) {
            $query->whereBetween(
                'created_at',
                [ $params['created_at'][0], $params['created_at'][1] ]
            );
        }

        // 更新时间
        if (isset($params['updated_at']) && filled($params['updated_at']) && is_array($params['updated_at']) && count($params['updated_at']) == 2) {
            $query->whereBetween(
                'updated_at',
                [ $params['updated_at'][0], $params['updated_at'][1] ]
            );
        }

        // 删除时间
        if (isset($params['deleted_at']) && filled($params['deleted_at']) && is_array($params['deleted_at']) && count($params['deleted_at']) == 2) {
            $query->whereBetween(
                'deleted_at',
                [ $params['deleted_at'][0], $params['deleted_at'][1] ]
            );
        }

        return $query;
    }
}