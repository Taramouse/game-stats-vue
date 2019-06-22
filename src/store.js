import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'Projects',
    msg: 'This is the current vuex state.',
    projects: [
      {
        id: '1',
        title: 'First Project',
        desc: 'The first project.',
        color: 'red'
      },
      {
        id: '2',
        title: 'Second Project',
        desc: 'The second project.',
        color: 'green'
      },
      {
        id: '3',
        title: 'Third Project',
        desc: 'The third project, it has a longer description than the other projects',
        color: 'blue'
      },
      {
        id: '4',
        title: 'Fourth Project',
        desc: 'The fourth project.',
        color: 'yellow'
      }
    ]
  },
  getters: {
    title (state) {
      return state.title
    },
    msg (state) {
      return state.msg
    },
    projects (state) {
      return state.projects
    }
  },
  mutations: {

  },
  actions: {

  }
})
