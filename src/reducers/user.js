
import { CHANGE_USER_DATA, CHANGE_USER_PARAM } from '../actionTypes/user'

function user(state = {}, action) {
  switch (action.type) {
    case CHANGE_USER_DATA:
      return action.data
    case CHANGE_USER_PARAM:
      return { ...state, [action.key]: action.value }
    default:
      return state
  }
}

export default user
