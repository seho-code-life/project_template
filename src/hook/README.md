## useRequest

useRequest 是一个发起请求的 hook 函数，它基于 axios 和 typescript，我们可以使用 useRequest 函数轻松的发起一个请求，它经常被用于在 model 层，比如说:

```js
addList(params: TListApiModel.ReqAddList): Promise<TListApiModel.ResAddList> {
  return useRequest({
    url: '/v1/list',
    method: 'POST',
    data: params
  });
}
```

它的入参类型是:

```js
// 请求参数类型约定
export type HttpParams = {
  options?: {
    authApi?: boolean // 是否私有API(即登陆之后才可以访问的api
    globalLoading?: boolean
  }
} & AxiosRequestConfig
```

AxiosRequestConfig 是 axios 的参数类型, 我们可以在[这里](https://github.com/axios/axios/blob/2c9cc76ee9cce0a144a68d5a6b2b8f4da89c6e15/index.d.ts#L62)查阅完整的
例子，useRequest 自带了部分参数的兼容，比如说 get/post 请求，请求数据字段进行了统一，即都可以使用 data 进行传递（axios 是 get 请求传递 params，post 请求传递
data）

在 useRequest 中，注释带有“###”的预留功能, 可以对 http 请求自定义 loading 逻辑，响应状态码回调...
