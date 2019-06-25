
import { combineReducers } from 'redux'
import profile from './profile'
import messagebar from './messagebar'
import tokens from './tokens'
import projects from './projects'
import modal from './modal'
import users from './users'
import tasks from './tasks'
import chat from './chat'

export default combineReducers({
  profile,
  messagebar,
  tokens,
  projects,
  modal,
  users,
  tasks,
  chat
})
