import { createStore } from "vuex";
export default createStore({
  state: {
    requestLoading: false
  },
  mutations: {
    setRequestLoading(state, loading){
      state.requestLoading = loading;
    }
  },
  actions: {},
  modules: {},
});
