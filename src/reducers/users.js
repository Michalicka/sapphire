
import { CHANGE_USERS_DATA, CHANGE_USERS_ERRORS, TOGGLE_USERS_LOADING } from '../actionTypes/users'

const initialState = {
  loading: false,
  errors: {},
  data: []
}

export default function users(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USERS_DATA:
      return { ...state, data: action.data }
    case CHANGE_USERS_ERRORS:
      return { ...state, errors: action.errors }
    case TOGGLE_USERS_LOADING:
      return { ...state, loading: action.loading }
    default:
      return state
  }
}
