
import { CHANGE_USER_DATA, CHANGE_USER_PARAM, CHANGE_USER_ERRORS, TOGGLE_USER_LOADNIG } from '../actionTypes/user'

const initialState = {
  data: {
    id: null,
    name: '',
    email: ''
  },
  errors: {},
  loading: false
}

function user(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USER_DATA:
      return { ...state, data: action.data }
    case CHANGE_USER_PARAM:
      const data = { ...state.data, [action.key]: action.value }
      return { ...state, data }
    case CHANGE_USER_ERRORS:
      return { ...state, errors: action.errors }
    case TOGGLE_USER_LOADNIG:
      return { ...state, loading: action.value }
    default:
      return state
  }
}

export default user
