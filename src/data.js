// Emulating records which should be returned from API backend
// in the real world.
export default {
  stats: {
    profiles: [
      {
        id: 1,
        user_id: 1,
        title: 'Profile 1 title',
        description: 'First profile description',
        isLoaded: false,
        author: { id: 1, name: 'Nicky Keyse', email: 'nickykeyse@gmail.com' },
        columns: [
          { value: 'date', title: 'Date' },
          { value: 'first', title: 'First' },
          { value: 'second', title: 'Second' },
          { value: 'third', title: 'Third' },
          { value: 'fourth', title: 'Fourth' },
          { value: 'fifth', title: 'Fifth' },
          { value: 'sixth', title: 'Sixth' }
        ],
        items: [
          {
            date: '22/06/2019',
            first: '1',
            second: '2',
            third: '3',
            fourth: '4',
            fifth: '5',
            sixth: '6'
          },
          {
            date: '02/07/2019',
            first: '11',
            second: '22',
            third: '33',
            fourth: '44',
            fifth: '55',
            sixth: '66'
          }
        ]
      },
      {
        id: 2,
        user_id: 1,
        title: 'Profile 2 title',
        description: 'Second profile description',
        isLoaded: false,
        author: { id: 1, name: 'Nicky Keyse', email: 'nickykeyse@gmail.com' },
        columns: [
          { value: 'date', title: 'Date' },
          { value: 'first', title: 'First' },
          { value: 'second', title: 'Second' },
          { value: 'third', title: 'Third' },
          { value: 'fourth', title: 'Fourth' },
          { value: 'fifth', title: 'Fifth' },
          { value: 'sixth', title: 'Sixth' }
        ],
        items: [
          {
            date: '22/06/2019',
            first: '1',
            second: '2',
            third: '3',
            fourth: '4',
            fifth: '5',
            sixth: '6'
          },
          {
            date: '02/07/2019',
            first: '11',
            second: '22',
            third: '33',
            fourth: '44',
            fifth: '55',
            sixth: '66'
          }
        ]
      },
      {
        id: 3,
        user_id: 1,
        title: 'Profile 3 title',
        description: 'Third profile description',
        isLoaded: false,
        author: { id: 1, name: 'Nicky Keyse', email: 'nickykeyse@gmail.com' },
        columns: [
          { value: 'date', title: 'Date' },
          { value: 'first', title: 'First' },
          { value: 'second', title: 'Second' },
          { value: 'third', title: 'Third' },
          { value: 'fourth', title: 'Fourth' },
          { value: 'fifth', title: 'Fifth' },
          { value: 'sixth', title: 'Sixth' }
        ],
        items: [
          {
            date: '22/06/2019',
            first: '1',
            second: '2',
            third: '3',
            fourth: '4',
            fifth: '5',
            sixth: '6'
          },
          {
            date: '02/07/2019',
            first: '11',
            second: '22',
            third: '33',
            fourth: '44',
            fifth: '55',
            sixth: '66'
          }
        ]
      }
    ]
  }
}
