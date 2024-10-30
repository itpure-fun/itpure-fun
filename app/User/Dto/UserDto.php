<?php
namespace App\User\Dto;

use Mine\Interfaces\MineModelExcel;
use Mine\Annotation\ExcelData;
use Mine\Annotation\ExcelProperty;

/**
 * 用户表Dto （导入导出）
 */
#[ExcelData]
class UserDto implements MineModelExcel
{
    #[ExcelProperty(value: "用户id", index: 0)]
    public string $id;

    #[ExcelProperty(value: "用户昵称", index: 1)]
    public string $nick_name;

    #[ExcelProperty(value: "性别 0男1女", index: 2)]
    public string $sex;

    #[ExcelProperty(value: "密码盐", index: 3)]
    public string $salt;

    #[ExcelProperty(value: "密码", index: 4)]
    public string $password;

    #[ExcelProperty(value: "手机", index: 5)]
    public string $phone;

    #[ExcelProperty(value: "邮箱", index: 6)]
    public string $email;

    #[ExcelProperty(value: "头像", index: 7)]
    public string $avatar;

    #[ExcelProperty(value: "用户状态 0正常 1禁用", index: 8)]
    public string $status;

    #[ExcelProperty(value: "备注", index: 9)]
    public string $remarks;

    #[ExcelProperty(value: "创建时间", index: 10)]
    public string $created_at;

    #[ExcelProperty(value: "更新时间", index: 11)]
    public string $updated_at;

    #[ExcelProperty(value: "删除时间", index: 12)]
    public string $deleted_at;


}