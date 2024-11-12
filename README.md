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

## 安装 & 部署

### 快速安装

1. 拉取代码

```
git clone https://github.com/itpure-fun/itpure-fun.git
```

2. 步骤

```shell
# 进入项目目录
cd ./itpure-fun

# 创建和配置`.env`, 没有特殊设置可以不用修改
cp .env.example .env

# 安装composer包
comopser install -vvv

# 下载前端代码
git clone https://github.com/itpure-fun/front-local.git

# 执行
docker-compose up -d nginx hyperf nuxt mysql
```

4. 访问

> http://localhost/

### 部署

```
git clone https://github.com/itpure-fun/itpure-fun.git
```


  