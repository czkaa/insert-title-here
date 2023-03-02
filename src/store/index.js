import { createStore } from 'vuex'

export default createStore({
  state: {
    view: 'Home'
  },
  mutations: {
    setView(state, string) {
      state.view = string
    }
  },
  actions: {
  },
  modules: {
  }
})
