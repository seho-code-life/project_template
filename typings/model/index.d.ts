declare namespace ModelApp {
  export type ResList<Items> = {
    current_page: number;
    page_size: number;
    items: Items[] | null;
    total: number;
    total_page: number;
  };

  export type ReqList = {
    page: number;
  };
}
