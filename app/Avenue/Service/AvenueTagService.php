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

namespace App\Avenue\Service;

use App\Avenue\Mapper\AvenueProductMapper;
use App\Avenue\Mapper\AvenueTagMapper;
use Mine\Abstracts\AbstractService;

/**
 * 标签服务类
 */
class AvenueTagService extends AbstractService
{
    /**
     * @var AvenueTagMapper
     */
    public $mapper;

    public $productMapper;

    public function __construct(AvenueTagMapper $mapper, AvenueProductMapper $productMapper)
    {
        $this->mapper = $mapper;
        $this->productMapper = $productMapper;
    }

    public function getPageList(?array $params = null, bool $isScope = true): array
    {
        $list = $this->mapper->listQuerySetting($params, $isScope)->orderBy('id', 'desc');

        $flag = false;
        if (!empty($params['onlyMenu'])) {
            $list = $list->get();
        } else {
            $flag = true;
            $list = $list->paginate((int)$params['pageSize'] ?? 10);
        }

        return $flag ? $this->mapper->setPaginate($list) : $list->toArray();
    }

    public function delete(array $ids): bool
    {
        //验证标签下是否存在产品
        $exists = $this->productMapper->model::whereHas('productTag', function ($query) use ($ids) {
            $query->whereIn('tag_id', $ids);
        })->exists();
        if ($exists) {
            throw new \Exception('标签下存在产品，删除失败！');
        }
        $this->mapper->model::destroy($ids);
        return true;
    }
}