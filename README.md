# vue3-vite2-ts-template

## 命令

启动本地开发服务器

```shell
npm run dev
```

启动生产环境打包

```shell
npm run build
```

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

## gitlab ci 设置

需根据自己业务场景进行设置

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
