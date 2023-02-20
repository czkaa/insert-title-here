import { createStore } from 'vuex'

export default createStore({
  state: {
    isWireframe: true
  },
  mutations: {
    toggleIsWireframe ( state ) {
      state.isWireframe = !state.isWireframe
    }
  },
  actions: {
  },
  modules: {
  }
})
