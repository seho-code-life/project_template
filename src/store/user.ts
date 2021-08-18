import { defineStore } from 'pinia';
export const useMainStore = defineStore<TStoreMainType>('user', {
  state: () => ({
    counter: 0,
    name: 'Eduardo'
  }),
  getters: {
    doubleCount() {
      return this.counter * 2;
    },
    doubleCountPlusOne() {
      return this.doubleCount * 2 + 1;
    }
  },
  actions: {
    reset() {
      this.counter = 0;
    }
  }
});
