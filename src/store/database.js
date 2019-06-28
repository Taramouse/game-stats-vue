import { Database } from '@vuex-orm/core'
import User from '@/models/User'
import Profile from '@/models/Profile'
import users from './modules/users'
import profiles from './modules/profiles'

// Create new instance of Database.
const database = new Database()

// Register Model and Module. The First argument is the Model, and
// second is the Module.
database.register(User, users)
database.register(Profile, profiles)

export default database
