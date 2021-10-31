# vue3-vite2-ts-template

- [x] 无需引入直接使用组件/函数 [详情](#组件函数自动按需导入)
- [x] 支持[Windicss](https://cn.windicss.org/)
- [x] 代码提交前的 lint-stage+husky 校验和美化代码, 多人协作风格统一
- [x] 适合中小项目的 typescipt 的 mvc 风格架构
- [x] vite/rollup 打包优化（gzip,legacy 兼容）
- [x] vscode [代码片段/优化](#vscode-开发小指南)
- [x] 预设 Storage, Cookie TS 版本的模块化方案
- [x] 预设 Eslint 以及 Editorconfig
- [x] 预设 Pinia 状态管理
- [x] 预设 开发环境的 [vite-plugin-mock](vite-plugin-mock)
- [x] 预设 自动装载路由 [vite-plugin-pages](https://www.npmjs.com/package/vite-plugin-pages)
- [x] 预设 [TS-Jest](https://github.com/kulshekhar/ts-jest) 编写测试用例
- [x] 可以与 Yapi [无缝结合](https://www.yinzhuoei.com/index.php/archives/596/)
- [x] 与 UI 框架不耦合，可以使用 antdv,element,vant 等
- [x] 自带开发常用依赖，antdv, axios, dayjs, querystring...
- [ ] SSR/CSR 优化
- [ ] 项目文档工具

## 环境需求

node >= 14.13.1

> (Jest 的 ESM 利用了 Node 对 ESM 支持，所以需要大于这个版本，如果你不使用 Jest，请忽略)

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

### 启动/打包 命令

| 命令       | 含义                              |
| ---------- | --------------------------------- |
| dev:test   | 快速启动本地开发服务器(test 环境) |
| dev:prod   | 快速启动本地开发服务器(prod 环境) |
| build:test | 打包(test 环境)                   |
| build:prod | 打包(prod 环境)                   |

## 技术栈：

1. [vue3](https://vue3js.cn/)
2. [vueRouter4](https://next.router.vuejs.org/guide/)
3. pinia
4. typescript

## 命令行 🔧

通过安装 Tool，来可视化地使用模板，因为仓库中的模板大多数都不会全部用到，你可以通过 tool 去按需引入它们

```
npm i enjoy-project-tool -g
```

创建模板

```
enjoy create
```

当然，作为模板的伴生工具，我还会继续维护并且持续提出新的 feature 来减轻我们开发负担

Tool 是使用 TS 开发的，如果你感兴趣可以提 pr，这是[Tool 的仓库](https://github.com/seho-code-life/project_tool)

## 类型文档/组件文档

文档待补充，暂定使用

1. [dumi](https://d.umijs.org/zh-CN)作为组件库文档

## 代码提交

旧版本的 husky 和新版还是有很多不一样的，所以如果你以前用过 husky 那么你要在代码提交这里做更多逻辑的话，可以去看看最新的文档。

模板中只拦截了 pre_commit 这个钩子，目标就是在 pre_commit 的时候对代码进行 lint 和自动修复以及美化，而且仅要对暂存区的文件 lint，所以使用了 lint-staged。这个组
合太常见了，有需求的开发者可以再这个上层定义一些有趣的功能提 pr。

还有一个需求是校验 git commit message 的规范，但是对于小团队来讲，校验这个规范没有太大必要，也暂时不会对团队带来好处，所以爱鼓捣的可以去鼓捣哈。

可以推荐团队成员使用 [git-commit-plugin-vscode](https://marketplace.visualstudio.com/items?itemName=redjue.git-commit-plugin)

## vscode 开发小指南

推荐使用 Volar 插件进行开发，如果你的 IDE 是 Jetbrains 系列的，那么你可能不太需要这个插件，如果你是 vscode 推荐使用 volar。使用 volar，不仅可以在 vue 开发上和
jetbrains 的表现一致，还可以得到更完善 vue3 的支持，甚至非常新/在草案的语法糖都能够快速享受到。

[下载 volar 地址](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

此模板对于 vscode 有天然的支持，如果你使用 vscode，就能使用模板自带的 vscode 配置，比如说保存自动 fix&prettier 或者其他有意思的功能。

1. 有那么一点智能的代码模板 🐶

模板中自带了若干个 vscode 的 code-snippets，snippets 将会持续更新，它和模板深度贴合，可以帮助你摆脱繁琐的开发。下面就一一描述几个 snippets 的作用:

- model-init-type
  > 初始化 typings/model/api 的提示工具，自动声明命名空间以及导出

<img width="70%" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-86dc45ba-28e8-4734-a880-bbf700b08cf9/cd983ea7-89a9-42f5-ab95-019190a805e8.gif"/>

- model-init-api
  > 初始化 model 下的 api 类，自动引入与之匹配的 type 类型声明文件以及其他可能用到的依赖

<img width="70%" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-86dc45ba-28e8-4734-a880-bbf700b08cf9/12b51827-c296-49cf-a16f-a790d6213390.gif"/>

- model-init-cache
  > 初始化 model 下的 cache 类，自动引入与之匹配的 type 类型声明文件以及其他可能用到的依赖

<img width="70%" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-86dc45ba-28e8-4734-a880-bbf700b08cf9/3974f3d2-2eba-44c9-b621-6c30e6241ce3.gif"/>

- controller-init

> 初始化控制器类

<img width="70%" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-86dc45ba-28e8-4734-a880-bbf700b08cf9/3f1939a3-6657-44eb-8125-6ac141e7d138.gif">

- vue-init
  > 初始化 vue 页面/组件

<img width="70%" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-86dc45ba-28e8-4734-a880-bbf700b08cf9/3a5e4588-72ec-49f7-8a49-f390b9966bfd.gif"/>

## 组件/函数自动按需导入

一般使用组件的按需导入功能，都会使用 babel-plugin-import 这个插件进行按需分析然后自动引入，但是 vite 中提供给我们了:

1. unplugin-vue-components
2. unplugin-auto-import

使得我们可以这样在 template 中去描述组件而无需导入

```html
<a-menu>
  <a-menu-item></a-menu-item>
</a-menu>
```

我们在 components 中的组件，也可以直接去使用它:

```html
<hello-world></hello-world>
```

同样的，我们也可以实现函数/库的自动按需导入，比如我们可以直接在 vue 中去写 ref,reactive,toRef 这样的 hook:

```html
<template>
  <div class="component">
    <div class="title text-4xl">hello, world</div>
    <div class="date">{{ date }}</div>
  </div>
</template>
<script lang="ts" setup>
  import dayjs from 'dayjs'
  const date = ref(dayjs().format('YYYY-MM-DD'))
</script>
<style lang="scss" scoped>
  .component {
    .title {
    }
    .date {
      margin-top: 15px;
    }
  }
</style>
```

而且自带类型提示，因为 unplugin-auto-import 会在 src 下生成一个 auto-imports 的类型声明文件，自动引入了相关类型。

目前在模板中，支持以下依赖的自动导入：

```js
;['vue', 'vue-router', '@vueuse/core', 'pinia']
```

## 基于文件系统的路由和布局

如果你开发过 nuxt 程序的话，那么你应该会对里面的路由设计非常感兴趣，没有路由声明文件，也没有布局引入代码，而模板中自带了这 2 种功能，得益于下面 2 个插件:

1. vite-plugin-pages
2. vite-plugin-vue-layouts

通过插件编译生成的路由信息 layouts 插件替换页面信息并且追加 children 将会直接交给 vue-router

```js
import { createRouter, createWebHashHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'

const routerHashHistory = createWebHashHistory()
const routes = setupLayouts(generatedRoutes)
const Router = createRouter({
  history: routerHashHistory,
  routes
})

export default Router
```

我们则可以在页面中这样指定 layout 和路由其他信息

```html
<route lang="yaml">meta: layout: default bgColor: yellow</route>
```

## 开发指南

这一块根据自身团队成员的习惯会逐步调整，所以这里的介绍会经常更改。

这套微不足道的架构足以应对中小 APP，也是非常简单的，主要就是 mvc+ts 风格。如果你阅读完整个模板文档之后，你会发现很多东西都做了模块化，把业务划分开了，这也是目前
团队开发没有注意到的一点，自身开发完爽是爽了，另外一个人维护就要惨了。各种配置，api 都找不到，组件/组件参数也找不到，可能为了快速开发，都会去复制老项目和其他页
面的代码；这虽然也是一种“复用”，但是总归来说并不是标准的。所以只有将业务划分开，才能快速定位具体核心代码，才能快速复用。

### 类型

/typings

像大部分工程一样，把能抽离的 type 都尽量都抽离到了 typings 这一层，这一层也暂时根据需求划分了以下几个内容:

1. controller
2. model
3. hook
4. store

里面最重度使用的应该是 model，我们在 model 模型中根据业务定义了很多 ts，比如 user.ts:

```ts
namespace TUserApiModel {
  type ReqLogin = {
    captcha: string
    password: string
    username: string
    uuid: string
  }

  type ResLogin = Promise<
    ActionResult<{
      token: string
    }>
  >
}

export default TUserApiModel
```

这两个就代表了 model 里面 api 层(后面会详细说明 model 里面的 api)，使用 Req 和 Res 作为前缀也就是请求和响应的类型，那么我们定义好之后，在整个工程中我就可以这样
使用类型:

```ts
TUserModel.ReqLogin
```

那么同理，types 文件夹中像 store，hook 这样的，也是根据业务划分，去定义类型的，这里就不再过多阐述了。

### 模型

src/model

目前 model 分为 2 个含义：

1. api
2. cache

前端大部分的数据来源都包含到了，api 模型定义了不同业务的 api 方法，比如 user.ts：

```ts
import useRequest from '../../hook/useRequest'

export default class UserApiModel {
  async login(params: TUserModel.ReqLogin): TUserModel.ResLogin {
    return await useRequest({
      url: `${params}`,
      method: 'get',
      options: {
        authApi: true
      }
    })
  }
}
```

useRequest 是我们自定义实现的 [hook 函数](<https://github.com/seho-code-life/project_template/tree/vue3-vite2-ts-template(dev)/src/hook>)，我们通过这个 hook 可
以发起请求，那么你可以看到在这个类中定义了 login 这个方法，入参类型就是 TUserModel.ReqLogin, 返回类型就是 TUserModel.ResLogin，这个类型都是我们在 typings 定义的
。

再比如说我们搭配 kurimudb 做了缓存的模块化，最常用的缓存插件也预装好了，我们可以在 model 里面去写这样一段代码：

/model/cache/user.ts

```ts
import { Models } from 'kurimudb'
import { LocalStorageDriver } from 'kurimudb-driver-localstorage'
import { CookieDriver } from 'kurimudb-driver-cookie'

export class UserLocalStorage extends Models.keyValue {
  constructor() {
    super({
      name: 'user',
      driver: LocalStorageDriver
    })
  }
}

export class UserCookie extends Models.keyValue {
  constructor() {
    super({
      name: 'user',
      driver: CookieDriver
    })
  }
}
```

我们在这里定义了 2 个 kurimudb 类，一个是 localstorage 一个是 cookie，我们可以在这里新增一些方法或者直接导出给 controller 用，因为即便你不新增方法也可以使用
kurimudb 内置的函数。

我们拥有 kurimudb 这样的库可以解决存储模块化的问题，我们不用关心这个缓存的 key 是否被使用过，只需要设置好唯一的 name 值，它就能给我们提供一组方便调用的 api。另
外 kurimudb 还有 sessionstorage 和 indexDB 的插件，如果业务需要可以快速的安装，然后声明一个新的类导出即可使用。

### 控制器

src/controller

在模板默认自带了一个 user.ts 例子，我们在上一个 model 中说明了 apiModel 和 cacheModel，这里的 controller 就直接引入它们。并且在 controller 暴露入口。

```ts
import UserApiModel from '../model/api/user'
import { UserLocalStorage, UserCookie } from '../model/cache/user'

export default class UserController {
  private localStorageModel: UserLocalStorage
  private cookieModel: UserCookie
  private apiModel: UserApiModel

  constructor() {
    this.apiModel = new UserApiModel()
    this.localStorageModel = new UserLocalStorage()
    this.cookieModel = new UserCookie()
  }
  async login(req: TUserModel.ReqLogin): TUserModel.ResLogin {
    return await this.apiModel.login(req)
  }
}
```

控制器我们还可以对 api/cache 获取的数据做处理，比如说，后端返回的数据格式前端不便直接展示，我们应该在 controller 需要做一层转译，比如像这样：

```ts
transform(): { text: string; value: string }[] {
    const data = {
      '0': '小明',
      '1': '小红'
    };
    let _arr = [];
    let key: keyof typeof data;
    for (key in data) {
      _arr.push({
        text: data[key],
        value: key
      });
    }
    return _arr;
  }
```

### 视图（.vue）

以 vue 来举例，我们如何在视图优雅的调用 controller？并且如何使用 typings 定义的类型来巩固我们的组件？

```ts
import TUserApiModel from '../../../typings/model/api/user'

const login = async (params: TUserModel.ReqLogin) => {
  await userController.login(params)
}

// 调用login函数
login({
  captcha: '',
  password: '',
  username: '',
  uuid: ''
})
```

当调用 login 函数时候，提供了与 ReqLogin 不符合的数据结构，是会出现报错的。同理，我们调用 cache 也是一样，需要在 controller 把 cache 封装一层暴露给 vue 即可。

## 环境变量

可以根据业务需要，建立业务相关的 env 环境（模式）。 [vite-模式文档](https://cn.vitejs.dev/guide/env-and-mode.html#modes)

以下是根目录默认提供了 3 个环境文件，对应了本地，测试，生产环境

1. .env
2. .env.dev
3. .env.prod

内容示例: 根据业务需要进行配置

```
VITE_APP_API=
VITE_APP_SECRET=
VITE_MOCK_URL=
```

那么同理，如果业务需要额外增加新的自定义环境变量，则需要在 src/vite-env.d.ts 中重新定义类型:

```ts
/// <reference types="vite/client" />
interface ImportMetaEnv {
  VITE_APP_API: string
  VITE_APP_SECRET: string
  VITE_APP_MOCK: string
  // 新的环境变量的定义写这里
}
```

## Mock

使用`vite-plugin-mock`来做本地开发的 mock，模板暂时没有内置生产环境的 mock。

```ts
// vite.config.ts
viteMockServe({
  localEnabled: true //是否开启本地的mock功能
}),
```

定义 mock api:

```ts
// /mock/user.ts

import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/get',
    method: 'get',
    response: (res: any) => {
      return {
        code: 0,
        data: {
          name: 'this is mock name'
        }
      }
    }
  }
] as MockMethod[]
```

## 其他的库

1. dayjs
2. axios
3. vueuse
4. kurimudb
5. query-string
