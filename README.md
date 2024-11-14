<div align="center">
  <pre>
  _____ _______ _____  _    _ _____  ______      ______ _    _ _   _ 
 |_   _|__   __|  __ \| |  | |  __ \|  ____|    |  ____| |  | | \ | |
   | |    | |  | |__) | |  | | |__) | |__ ______| |__  | |  | |  \| |
   | |    | |  |  ___/| |  | |  _  /|  __|______|  __| | |  | | . ` |
  _| |_   | |  | |    | |__| | | \ \| |____     | |    | |__| | |\  |
 |_____|  |_|  |_|     \____/|_|  \_\______|    |_|     \____/|_| \_|
  </pre>
  <p>  专注收集和分享IT程序员互联网工具、资源、产品 </p>
</div>

## 介绍

> 主要用于收录实用的程序员开发工具，资源和相关的产品等

## 功能展示

在线站点：<a href="https://itpure.fun" target="_blank">ITPURE.FUN</a>

## 部署

- Docker Compose部署(推荐) <a href="https://github.com/itpure-fun/itpure-fun-deploy/blob/main/README.md" target="_blank">查看文档</a>

## 免责声明

本软件不得用于开发违反国家有关政策的相关软件和应用，若因使用本软件造成的一切法律责任均与 `itpure-fun` 无关

## 安装和使用

## 安装使用

- 获取代码

```
git clone https://github.com/itpure-fun/itpure-fun.git
```
- 安装和配置

```
# 进入目录
cd itpure-fun 

# 安装
composer install

# copy配置文件，自行配置
cp .env.example .env
```

- 运行

```
php bin/hyperf.php start
```