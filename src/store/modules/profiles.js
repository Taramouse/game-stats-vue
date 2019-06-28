// The posts module. You can add any additional things you want.
export default {
  state: {
    isLoaded: false
  },

  actions: {
    fetch ({ commit }) {
      commit('isLoaded')
    }
  },

  mutations: {
    fetch (state) {
      state.isLoaded = true
    }
  }
}
