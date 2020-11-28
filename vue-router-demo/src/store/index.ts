import { createStore } from 'vuex'

export default createStore({
  state: {
    isAuthenticated: false,
  },
  mutations: {
    setIsAuthenticated(state, payload: boolean) {
      state.isAuthenticated = payload
    },
  },
  actions: {},
  modules: {},
})
