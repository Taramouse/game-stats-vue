import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'Game Stats',
    msg: 'This is vuex state.'
  },
  getters: {
    title (state) {
      return state.title
    },
    msg (state) {
      return state.msg
    }
  },
  mutations: {

  },
  actions: {

  }
})
