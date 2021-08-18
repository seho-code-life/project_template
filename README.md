# vue3-vite2-ts-template

- [x] 使用最新版本的 vite 和 vue3
- [x] git 提交前的 lint-stage+husky 校验和美化代码（prettier）, 多人协作风格统一
- [x] 开发中强大的 eslint 校验和自动修复以及 IDE 统一配置，将错误遏制在本地
- [x] 自带团队开发常用依赖，axios, day, querystring...
- [x] 适合中小项目的 typescipt 的 mvc 风格架构，type 类型抽离
- [x] 常用方法贯彻 hook 风格，预装 vueuse
- [x] Scss 基本工具库封装，实现定义一次，页面和页面无需多次引入，直接使用全局变量/函数，解放 css
- [ ] Rollup 打包优化
- [ ] SSR/CSR 优化
- [ ] 业务组件/type 类型文档自动生成，且在启动开发服务器时，自动打开 doc
- [ ] 动画方案
- [ ] 预装业务常用的 webcomponents 组件（团队自己开发组件库）
- [ ] 移动端/小程序端 兼容性方案

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
3. [vuex4](https://next.vuex.vuejs.org/)
4. typescript

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

## 请求

请求使用了 axios，包括内置了 js-cookie 的一些开发包。

```js
import http from '../../common/service/request';

http
  .request(
    {
      authApi: true,
      url: '',
      method: 'post'
    },
    {
      isLoading: true
    }
  )
  .then((res) => {
    console.log(res);
  });
```

## css 预编译工具

使用 sass，业务中如果有很多 css 复杂处理就需要一个 sass 工具包来解决，推荐下面这个包，采用的也是 BEM 规范。

```shell
npm install --save sass-utils
```

## vite 相关开箱即用的配置

1. SSR (目前实验阶段，不稳定)
2. JSX
3. HMR

## PWA

pwa 功能是 vite 生态一个第三方插件实现的，可以根据简单的配置让应用快速变成 PWA 应用，如果你还不了解 PWA 是什么，那我简单介绍一下 PWA 应用的特性：

1. 离线访问
2. 推送
3. 向 APP 一样在用户的电脑端或者手机端形成桌面入口

pwa 的配置我配的不是很多，但是基本满足需要，后期会把离线缓存加强一下，如果有兴趣的朋友，可以提 pr。

如果要更改 pwa 的应用图标，在 public 下更改 logo.png 即可。需要更改不同尺寸。

查看 pwa 功能就运行部署命令，上线之后即可。

```shell
npm run build
```

[这个包叫 pwa for vite](https://github.com/antfu/vite-plugin-pwa)
