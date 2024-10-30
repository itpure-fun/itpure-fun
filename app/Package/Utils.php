<?php


namespace App\Package;


class Utils
{
    public static function ormSql($model)
    {
        $bindings = $model->getBindings();
        $sql = str_replace('?', '%s', $model->toSql());
        foreach ($bindings as $key => $val) {
            if (is_string($val)) {
                $bindings[$key] = "'" . $val . "'";
            }
        }
        $tosql = sprintf($sql, ...$bindings);
        return $tosql;
    }

    /**
     * 生成验证码
     * @return int
     */
    public static function getCode()
    {
        return rand(100000, 999999);
    }
}