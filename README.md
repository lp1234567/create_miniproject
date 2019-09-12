# suboyidong

## 介绍
> 创建于 2019/9/11 

> 一个快速搭建小程序的网站

======================================

## 技术栈
react redux antd less h5 c3 react-router axios

## 环境依赖
### node 
v8.11.2

## 安装运行
npm i 			 安装node运行环境
npm start 		 启动程序

## 目录结构

```bash 
卷 新加卷 的文件夹 PATH 列表
卷序列号为 0A7A-60AC
F:.
│  .gitignore
│  config-overrides.js
│  list.txt
│  package-lock.json
│  package.json
│  README.md
│  yarn.lock
├─public
│      favicon.ico
│      index.html
│      logo192.png
│      manifest.json
│      robots.txt
│      
└─src
    │  App.css                      // 公用样式
    │  App.js
    │  App.test.js
    │  demo.jsx
    │  index.css
    │  index.js
    │  logo.svg
    │  serviceWorker.js
    │  
    ├─common
    │  ├─imgs
    │  └─js
    │          rem.js
    │          
    ├─components
    │  │  index.jsx                 // 操作弹窗处理
    │  │  
    │  └─text
    │          Text.jsx             // 文本组件--高阶组件
    │          
    ├─pages
    │  └─home
    │          Home.jsx             // 首页
    │          home.less
    │          
    ├─reducers
    │      index.js                 // redux管理
    │      phoneEle.js              // 添加到手机的元素
    │      
    ├─router
    │      routerMap.jsx
    │      
    └─utils
            eventEmitter.js
            rem.js
            storage.js
            util.js
            

```
## 流程图
```
	graph LR
	home[主页] --> text[文本]
	
```
#### 2019/9/12 第一次上传 初步搭建项目

    