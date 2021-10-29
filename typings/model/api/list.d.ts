namespace TListApiModel {
  interface ReqCreateList {
    /** 内容 */
    content: string
    /** 标题 */
    title: string
  }

  interface ResCreateList {
    /** 数据id */
    id: string
  }
}

export default TListApiModel
