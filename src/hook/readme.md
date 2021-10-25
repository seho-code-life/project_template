## useRequest

useRequest是一个发起请求的hook函数，它基于axios和typescript，我们可以使用useRequest函数轻松的发起一个请求，它经常被用于在model层，比如说:

```ts
addList(params: TListApiModel.ReqAddList): Promise<TListApiModel.ResAddList> {
  return useRequest({
    url: '/v1/list',
    method: 'POST',
    data: params
  });
}
```

它的入参类型是: 

```ts
// 请求参数类型约定
export type HttpParams = {
  options?: {
    authApi?: boolean; // 是否私有API(即登陆之后才可以访问的api
    globalLoading?: boolean;
  };
} & AxiosRequestConfig;
```

AxiosRequestConfig 是axios的参数类型, 我们可以在[这里](https://github.com/axios/axios/blob/2c9cc76ee9cce0a144a68d5a6b2b8f4da89c6e15/index.d.ts#L62)查阅完整的例子，useRequest自带了部分参数的兼容，比如说get/post请求，请求数据字段进行了统一，即都可以使用data进行传递（axios是get请求传递params，post请求传递data）。

在useRequest中，注释带有“###”的预留功能, 可以对http请求自定义loading逻辑，响应状态码回调...
