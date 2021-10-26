declare type TUserStoreType = {
  name: 'user'
  state: {
    age: number
    name: string
  }
  getter: {
    doubleAge: () => number
  }
  actions: {
    resetAge: () => number
  }
}
