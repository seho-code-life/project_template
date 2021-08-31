# vue3-vite2-ts-template

- [x] 使用最新版本的 vite 和 vue3
- [x] antdv 真正意义上的按需加载组件以及组件相关样式
- [x] git 提交前的 lint-stage+husky 校验和美化代码（prettier）, 多人协作风格统一
- [x] 开发预设 eslint 校验和自动修复以及 IDE 统一配置，将开发错误遏制在本地
- [x] 自带团队开发常用依赖，antdv, axios, day, querystring...
- [x] 适合中小项目的 typescipt 的 mvc 风格架构，type 类型抽离
- [x] 常用方法贯彻 hook 风格，预装 vueuse
- [x] Scss 基本工具库封装，实现定义一次，页面和页面无需多次引入，直接使用全局变量/函数，解放 css
- [x] Rollup 打包优化
- [x] Storage,Cookie 的模块化方案，且支持 ts 严格规定传入类型
- [x] 预设 Pinia 状态管理的模块化以及类型声明
- [x] 预设开发环境的Mock功能
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

### 预设 env 命令

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

## 类型文档/组件文档

文档待补充，暂定使用 
1. [dumi](https://d.umijs.org/zh-CN)作为组件库文档


## 代码提交
旧版本的husky和新版还是有很多不一样的，所以如果你以前用过husky那么你要在代码提交这里做更多逻辑的话，可以去看看最新的文档。

模板中只拦截了pre_commit这个钩子，目标就是在pre_commit的时候对代码进行lint和自动修复以及美化，而且仅要对暂存区的文件lint，所以使用了lint-staged。这个组合太常见了，有需求的开发者可以再这个上层定义一些有趣的功能提pr。

还有一个需求是校验git commit message的规范，但是对于小团队来讲，校验这个规范没有太大必要，也暂时不会对团队带来好处，所以爱鼓捣的可以去鼓捣哈。

可以推荐团队成员使用 [git-commit-plugin-vscode](https://marketplace.visualstudio.com/items?itemName=redjue.git-commit-plugin)
## vscode 开发小指南

推荐使用 Volar 插件进行开发，如果你的 IDE 是 Jetbrains 系列的，那么你可能不太需要这个插件，如果你是 vscode 推荐使用 volar。使用 volar，不仅可以在 vue 开发上和
jetbrains 的表现一致，还可以得到更完善 vue3 的支持，甚至非常新/在草案的语法糖都能够快速享受到。

[下载volar地址](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

此模板对于vscode有天然的支持，如果你使用vscode，就能使用模板自带的vscode配置，比如说保存自动lint&fix&prettier或者其他有意思的功能。

1. 有那么一点智能的代码模板🐶

模板中自带了若干个vscode的code-snippets，snippets将会持续更新，它和模板深度贴合，可以帮助你摆脱繁琐的开发。下面就一一描述几个snippets的作用: 

- model-init-type
> 初始化@types/model/api的提示工具，自动声明命名空间以及导出

<img width="70%" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-86dc45ba-28e8-4734-a880-bbf700b08cf9/cd983ea7-89a9-42f5-ab95-019190a805e8.gif"/>

- model-init-api
> 初始化model下的api类，自动引入与之匹配的type类型声明文件以及其他可能用到的依赖

<img width="70%" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-86dc45ba-28e8-4734-a880-bbf700b08cf9/12b51827-c296-49cf-a16f-a790d6213390.gif"/>

- model-init-cache
> 初始化model下的cache类，自动引入与之匹配的type类型声明文件以及其他可能用到的依赖

<img width="70%" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-86dc45ba-28e8-4734-a880-bbf700b08cf9/3974f3d2-2eba-44c9-b621-6c30e6241ce3.gif"/>

- controller-init

> 初始化控制器类

<img width="70%" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-86dc45ba-28e8-4734-a880-bbf700b08cf9/3f1939a3-6657-44eb-8125-6ac141e7d138.gif">

- vue-init
> 初始化vue页面/组件

<img width="70%" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-86dc45ba-28e8-4734-a880-bbf700b08cf9/3a5e4588-72ec-49f7-8a49-f390b9966bfd.gif"/>

## AntdV 开发小指南

传统的 antdv 的按需加载，都会使用 babel-plugin-import 这个插件进行按需分析然后自动引入，但是 antdv 中有很多嵌套的父子组件:

```
<a-menu>
  <a-menu-item></a-menu-item>
</a-menu>
```
由于内部设计原因，无法使用这个插件进行按需导入。最主要的是我们已经使用了vite，本身就带有按需导入，我们只需要处理他们的css的按需引入即可。所以使用了2个插件:

1. vite-plugin-components
2. vite-plugin-style-import

第一个插件主要帮助我们自动识别模板中用到的组件，实现自动引入，也就是说我们使用antdv这样的组件库的时候，不需要全量引入，甚至不需要手动的import就可以自动实现按需引入，如图:

<img src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c7e81452-9d28-4486-bedc-5dbf7c8386a5/1e56ccda-acb2-4db0-bfd0-3d852ee6173a.png">


而且脚手架内置了按需引入css的逻辑，所以antdv本身的设计原因导致引入css问题开发者也不需要担心。
第二个插件主要是辅助第一个插件做按需引入css逻辑的。第一个插件做的按需引入css有些许问题，比如说antdv里面有很多api调用的组件，比如message，通过message方法调用一个组件，这个时候css不生效，就需要使用第二个插件进行处理。

> 对于message这样的api组件的css不生效的原因很简单,第一个插件仅仅是解析template用到的组件然后自动引入css，但是无法处理import进来的api组件，所以需要第二个插件做处理。

## 开发指南
这一块根据自身团队成员的习惯会逐步调整，所以这里的介绍会经常更改。

这套微不足道的架构足以应对中小APP，也是非常简单的，主要就是mvc+ts风格。如果你阅读完整个模板文档之后，你会发现很多东西都做了模块化，把业务划分开了，这也是目前团队开发没有注意到的一点，自身开发完爽是爽了，另外一个人维护就要惨了。各种配置，api都找不到，组件/组件参数也找不到，可能为了快速开发，都会去复制老项目和其他页面的代码；这虽然也是一种“复用”，但是总归来说并不是标准的。所以只有将业务划分开，才能快速定位具体核心代码，才能快速复用。

### 类型

src/@types

像大部分工程一样，把能抽离的type都尽量都抽离到了@types这一层，这一层也暂时根据需求划分了以下几个内容:

1. controller
2. model
3. hook
4. store

里面最重度使用的应该是model，我们在model模型中根据业务定义了很多ts，比如user.ts:

```ts
namespace TUserApiModel {
  type ReqLogin = {
    captcha: string;
    password: string;
    username: string;
    uuid: string;
  };

  type ResLogin = Promise<
    ActionResult<{
      token: string;
    }>
  >;
}

export default TUserApiModel;

```
这两个就代表了model里面api层(后面会详细说明model里面的api)，使用Req和Res作为前缀也就是请求和响应的类型，那么我们定义好之后，在整个工程中我就可以这样使用类型:

```ts
TUserModel.ReqLogin
```

那么同理，types文件夹中像store，hook这样的，也是根据业务划分，去定义类型的，这里就不再过多阐述了。

### 模型

src/model

目前model分为2个含义：

1. api
2. cache

前端大部分的数据来源都包含到了，api模型定义了不同业务的api方法，比如user.ts：

```ts
import useRequest from '../../hook/useRequest';

export default class UserApiModel {
  async login(params: TUserModel.ReqLogin): TUserModel.ResLogin {
    return await useRequest({
      url: `${params}`,
      method: 'get',
      options: {
        authApi: true
      }
    });
  }
}

```
useRequest是我们自定义实现的hook函数，我们通过这个hook可以发起请求，那么你可以看到在这个类中定义了login这个方法，入参类型就是TUserModel.ReqLogin, 返回类型就是TUserModel.ResLogin，这个类型都是我们在@types定义的。

再比如说我们搭配kurimudb做了缓存的模块化，最常用的缓存插件也预装好了，我们可以在model里面去写这样一段代码：

/model/cache/user.ts

```ts
import { Models } from 'kurimudb';
import { LocalStorageDriver } from 'kurimudb-driver-localstorage';
import { CookieDriver } from 'kurimudb-driver-cookie';

export class UserLocalStorage extends Models.keyValue {
  constructor() {
    super({
      name: 'user',
      driver: LocalStorageDriver
    });
  }
}

export class UserCookie extends Models.keyValue {
  constructor() {
    super({
      name: 'user',
      driver: CookieDriver
    });
  }
}

```

我们在这里定义了2个kurimudb类，一个是localstorage一个是cookie，我们可以在这里新增一些方法或者直接导出给controller用，因为即便你不新增方法也可以使用kurimudb内置的函数。

我们拥有kurimudb这样的库可以解决存储模块化的问题，我们不用关心这个缓存的key是否被使用过，只需要设置好唯一的name值，它就能给我们提供一组方便调用的api。另外kurimudb还有sessionstorage和indexDB的插件，如果业务需要可以快速的安装，然后声明一个新的类导出即可使用。

### 控制器

src/controller

在模板默认自带了一个user.ts例子，我们在上一个model中说明了apiModel和cacheModel，这里的controller就直接引入它们。并且在controller暴露入口。

```ts
import UserApiModel from '../model/api/user';
import { UserLocalStorage, UserCookie } from '../model/cache/user';

export default class UserController {
  private localStorageModel: UserLocalStorage;
  private cookieModel: UserCookie;
  private apiModel: UserApiModel;

  constructor() {
    this.apiModel = new UserApiModel();
    this.localStorageModel = new UserLocalStorage();
    this.cookieModel = new UserCookie();
  }
  async login(req: TUserModel.ReqLogin): TUserModel.ResLogin {
    return await this.apiModel.login(req);
  }
}

```

控制器我们还可以对api/cache获取的数据做处理，比如说，后端返回的数据格式前端不便直接展示，我们应该在controller需要做一层转译，比如像这样：

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

以vue来举例，我们如何在视图优雅的调用controller？并且如何使用@types定义的类型来巩固我们的组件？

```ts
import TUserApiModel from '../../@types/model/api/user';

const login = async (params: TUserModel.ReqLogin) => {
  await userController.login(params);
};

// 调用login函数
login({
  captcha: "",
  password: "",
  username: "",
  uuid: ""
})
```

当调用login函数时候，提供了与ReqLogin不符合的数据结构，是会出现报错的。同理，我们调用cache也是一样，需要在controller把cache封装一层暴露给vue即可。



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
```

那么同理，如果业务需要额外增加新的自定义环境变量，则需要在 src/vite-env.d.ts 中重新定义类型:

```ts
/// <reference types="vite/client" />
interface ImportMetaEnv {
  VITE_APP_API: string;
  VITE_APP_SECRET: string;
  // 新的环境变量的定义写这里
}
```

## Mock
使用`vite-plugin-mock`来做本地开发的mock，模板暂时没有内置生产环境的mock。

```ts
// vite.config.ts
viteMockServe({
  localEnabled: true //是否开启本地的mock功能
}),
```

定义mock api:

```ts
// /mock/user.ts

import { MockMethod } from 'vite-plugin-mock';
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
      };
    }
  }
] as MockMethod[];

```


## 其他的库
1. dayjs
2. axios
3. vueuse
4. kurimudb
5. query-string
