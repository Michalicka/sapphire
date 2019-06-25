
import { CHANGE_USERS_DATA, CHANGE_USERS_ERRORS, TOGGLE_USERS_LOADING } from '../actionTypes/users'
import { getDefaultValues, changeData, changeErrorsParam, changeLoadingParam } from './utils'

const usersDefault = getDefaultValues(['getUsers'])

const initialState = {
  loading: false,
  errors: usersDefault({}),
  data: []
}

export default function users(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USERS_DATA:
      return changeData(state, action)
    case CHANGE_USERS_ERRORS:
      return changeErrorsParam(state, action)
    case TOGGLE_USERS_LOADING:
      return changeLoadingParam(state, action)
    default:
      return state
  }
}
