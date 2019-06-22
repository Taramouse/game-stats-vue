import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    profiles: [
      {
        id: '1',
        title: 'First Profile',
        desc: 'The first Profile.',
        color: 'red',
        columns: [
          { value: 'first', title: 'First' },
          { value: 'second', title: 'Second' },
          { value: 'third', title: 'Third' },
          { value: 'fourth', title: 'Fourth' },
          { value: 'fith', title: 'Fith' },
          { value: 'sixth', title: 'Sixth' }
        ]
      },
      {
        id: '2',
        title: 'Second Profile',
        desc: 'The second Profile.',
        color: 'green',
        columns: [
          { value: 'first', title: 'First' },
          { value: 'second', title: 'Second' },
          { value: 'third', title: 'Third' },
          { value: 'fourth', title: 'Fourth' },
          { value: 'fith', title: 'Fith' },
          { value: 'sixth', title: 'Sixth' }
        ]
      },
      {
        id: '3',
        title: 'Third Profile',
        desc: 'The third profile, it has a longer description than the other profiles',
        color: 'blue',
        columns: [
          { value: 'first', title: 'First' },
          { value: 'second', title: 'Second' },
          { value: 'third', title: 'Third' },
          { value: 'fourth', title: 'Fourth' },
          { value: 'fith', title: 'Fith' },
          { value: 'sixth', title: 'Sixth' }
        ]
      },
      {
        id: '4',
        title: 'Fourth Profile',
        desc: 'The fourth Profile.',
        color: 'yellow',
        columns: [
          { value: 'first', title: 'First' },
          { value: 'second', title: 'Second' },
          { value: 'third', title: 'Third' },
          { value: 'fourth', title: 'Fourth' },
          { value: 'fith', title: 'Fith' },
          { value: 'sixth', title: 'Sixth' }
        ]
      }
    ],
    item: [

    ]
  },
  getters: {
    profiles (state) {
      return state.profiles
    }
  },
  mutations: {

  },
  actions: {

  }
})
