namespace TListApiModel {
  interface ReqAddList {
    /** 列表标题 */
    title: string;
    /** 列表内容 */
    content: string;
  }

  interface ResAddList {
    /** 数据id */
    id: string;
  }
}

export default TListApiModel;
