<p align="center">
<a href="https://github.com/widget-js/widgets">
  <img width="150" src="https://raw.githubusercontent.com/widget-js/widgets/master/screenshot/logo.png" alt="Widgets - Capable and ergonomic widgets." width="300">
</a>
<br>
桌面组件 - 全网热搜组件包
</p>

<p align="center">
  <img src="https://img.shields.io/github/license/widget-js/widgets" alt="">
  <a href="https://discord.gg/vwSAaRR8cT"><img src="https://img.shields.io/badge/chat-on%20discord-7289da.svg?sanitize=true" alt="Chat"></a>
</p>

### 说明

这是桌面组件热搜组件包源码，包含知乎、bilibili、抖音、微博等平台的热搜组件。
全部开源组件仓库在这：https://github.com/widget-js/widgets

### Windows 10/11 客户端下载

https://www.microsoft.com/store/productId/9NPR50GQ7T53
https://haihaihai.vip

### 项目目录结构

```
widgets
├── src
│   ├── components                // 常用Vue组件
│   ├── views                     //
│   ├── widgets                   // 桌面组件文件
│   │   └── countdown             // 每个桌面组件一个文件夹
│   │       ├── XXWidget.vue      // 桌面小组件
│   │       └── XXConfig.vue      // 小组件配置页面
│   │       └── XXView.vue        // 小组件页面
│   └── index.ts
├── .gitignore
├── package.json
├── README.md
└── tsconfig.json
```

### 运行项目
#### 1.下载并运行桌面组件客户端
https://www.microsoft.com/store/productId/9NPR50GQ7T53
https://haihaihai.vip

#### 2.克隆代码并下载依赖

```shell
#克隆代码
git clone https://github.com/widget-js/hotspot.git

```
#### 3.到项目目录下载依赖
```shell
pnpm install
```
#### 4.运行
```shell
pnpm serve
```

### 创建自己的组件

```shell
pnpm widget create
```

### 组件列表

#### 知乎热榜

![png](public/images/preview_zhihu.png)

- 代码路径：/widgets/zhihu
- 组件路由：/widget/zhihu

#### bilibili热榜

![png](public/images/bilibili_hot_search.png)

- 代码路径：/widgets/bilibili
- 组件路由：/widget/bilibili



#### 微博热榜

![png](public/images/weibo_hot_search.png)

- 代码路径：/widgets/weibo
- 组件路由：/widget/weibo


#### 抖音热榜

开发中
