
import { combineReducers } from 'redux'
import user from './user'
import messagebar from './messagebar'
import tokens from './tokens'

export default combineReducers({
  user,
  messagebar,
  tokens
})
