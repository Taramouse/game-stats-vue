// Emulating todo records which should be returned from API backend
// in the real world.
export default [
  {
    id: 1,
    user_id: 1,
    title: 'Profile 1 title',
    description: 'First profile description',
    isLoaded: false,
    author: { id: 1, name: 'Nicky Keyse' }
  },
  {
    id: 2,
    user_id: 1,
    title: 'Profile 2 title',
    description: 'Second profile description',
    isLoaded: false,
    author: { id: 1, name: 'Nicky Keyse' }
  },
  {
    id: 3,
    user_id: 2,
    title: 'Profile 3 title',
    description: 'Third profile description',
    isLoaded: false,
    author: { id: 2, name: 'Nicky Keyse' }
  }
]
