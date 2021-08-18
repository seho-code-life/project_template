# vue3-vite2-ts-template

- [x] 使用最新版本的 vite 和 vue3
- [x] 重置样式
- [x] git 提交前的 lint-stage+husky 校验和美化代码（prettier）, 多人协作风格统一
- [x] 开发中强大的 eslint 校验和自动修复以及 IDE 统一配置，将错误遏制在本地
- [x] 自带团队开发常用依赖，antdv, axios, day, querystring...
- [x] 适合中小项目的 typescipt 的 mvc 风格架构，type 类型抽离
- [x] 常用方法贯彻 hook 风格，预装 vueuse
- [x] Scss 基本工具库封装，实现定义一次，页面和页面无需多次引入，直接使用全局变量/函数，解放 css
- [x] Rollup 打包优化
- [x] Storage,Cookie的模块化方案，且支持ts严格规定传入类型
- [x] 预设pinia状态管理的模块化以及类型声明
- [ ] SSR/CSR 优化
- [ ] 业务组件/type 类型文档自动生成，且在启动开发服务器时，自动打开 doc
- [ ] 动画方案
- [ ] 预装业务常用的 webcomponents 组件（团队自己开发组件库）

## 命令

| 命令       | 含义                                                    |
| ---------- | ------------------------------------------------------- |
| dev        | 快速启动本地开发服务器                                  |
| lint       | 带有--fix 的 eslint 校验                                |
| prettier   | eslint-prettier 的美化代码命令                          |
| prepare    | npm install 自动执行的 husky 安装命令（不使用的请忽略） |
| lint-stage | 对 git 暂存区的文件进行操作，源于 lint-stage 插件       |
| build      | vite 内置的打包使用 rollup，此模板自带打包优化          |
| serve      | 本地预览生产环境的程序                                  |

## 技术栈：

1. [vue3](https://vue3js.cn/)
2. [vueRouter4](https://next.router.vuejs.org/guide/)
3. pinia
4. typescript

## 类型文档/组件文档
## env

需要在根目录新建以下三个文件

1. .env
2. .env.dev
3. .env.prod

内容示例: 根据业务需要进行配置

```
VITE_APP_ADMIN_API=
VITE_APP_WEB_PATH=
VITE_APP_FILE_SIZE=
VITE_APP_SECRET=
```

## 时间处理

使用轻量级的 day.js 进行处理时间的库 [查阅文档](https://www.npmjs.com/package/dayjs)
