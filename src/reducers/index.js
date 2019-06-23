
import { combineReducers } from 'redux'
import user from './user'
import messagebar from './messagebar'
import tokens from './tokens'
import projects from './projects'
import modal from './modal'
import users from './users'
import tasks from './tasks'

export default combineReducers({
  user,
  messagebar,
  tokens,
  projects,
  modal,
  users,
  tasks
})
