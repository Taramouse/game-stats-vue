import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import database from './database'

Vue.use(Vuex)

const store = new Vuex.Store({
  plugins: [VuexORM.install(database)]
})

export default store

// export default new Vuex.Store({
//   state: {
//     profiles: [
//       {
//         id: '1',
//         title: 'First Profile',
//         desc: 'The first Profile.',
//         color: 'red',
//         columns: [
//           { value: 'date', title: 'Date' },
//           { value: 'first', title: 'First' },
//           { value: 'second', title: 'Second' },
//           { value: 'third', title: 'Third' },
//           { value: 'fourth', title: 'Fourth' },
//           { value: 'fifth', title: 'Fifth' },
//           { value: 'sixth', title: 'Sixth' }
//         ],
//         items: [
//           {
//             date: '22/06/2019',
//             id: '1',
//             first: '1',
//             second: '2',
//             third: '3',
//             fourth: '4',
//             fifth: '5',
//             sixth: '6'
//           },
//           {
//             date: '23/06/2019',
//             id: '2',
//             first: '11',
//             second: '22',
//             third: '33',
//             fourth: '44',
//             fifth: '55',
//             sixth: '66'
//           }
//         ]
//       },
//       {
//         id: '2',
//         title: 'Second Profile',
//         desc: 'The second Profile.',
//         color: 'green',
//         columns: [
//           { value: 'first', title: 'First' },
//           { value: 'second', title: 'Second' },
//           { value: 'third', title: 'Third' },
//           { value: 'fourth', title: 'Fourth' },
//           { value: 'fith', title: 'Fith' },
//           { value: 'sixth', title: 'Sixth' }
//         ]
//       },
//       {
//         id: '3',
//         title: 'Third Profile',
//         desc: 'The third profile, it has a longer description than the other profiles',
//         color: 'blue',
//         columns: [
//           { value: 'first', title: 'First' },
//           { value: 'second', title: 'Second' },
//           { value: 'third', title: 'Third' },
//           { value: 'fourth', title: 'Fourth' },
//           { value: 'fith', title: 'Fith' },
//           { value: 'sixth', title: 'Sixth' }
//         ]
//       },
//       {
//         id: '4',
//         title: 'Fourth Profile',
//         desc: 'The fourth Profile.',
//         color: 'yellow',
//         columns: [
//           { value: 'first', title: 'First' },
//           { value: 'second', title: 'Second' },
//           { value: 'third', title: 'Third' },
//           { value: 'fourth', title: 'Fourth' },
//           { value: 'fith', title: 'Fith' },
//           { value: 'sixth', title: 'Sixth' }
//         ]
//       }
//     ]
//   },
//   getters: {
//     profiles (state) {
//       return state.profiles
//     }
//   },
//   mutations: {

//   },
//   actions: {

//   }
// })
