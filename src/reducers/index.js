
import { combineReducers } from 'redux'
import user from './user'
import messagebar from './messagebar'
import tokens from './tokens'
import projects from './projects'

export default combineReducers({
  user,
  messagebar,
  tokens,
  projects
})
