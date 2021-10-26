import { defineStore } from 'pinia'
export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    age: 88,
    name: 'hello world'
  }),
  getters: {
    doubleAge(): number {
      return this.age * 2
    }
  },
  actions: {
    resetAge() {
      this.age = 0
    }
  }
})
