declare type TStoreMainType = {
  name: 'user';
  state: {
    counter: number;
    name: string;
  };
  getter: {
    doubleCount: () => number;
    doubleCountPlusOne: () => number;
  };
};
