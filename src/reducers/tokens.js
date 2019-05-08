
import { TOKENS_SUCCESS, CHANGE_TOKENS_ERRORS, TOGGLE_TOKENS_LOADING } from '../actionTypes/tokens'

const initialState = {
  errors: {},
  loading: false,
  success: false
}

function tokens(state = initialState, action) {
  switch (action.type) {
    case TOKENS_SUCCESS:
      return { ...state, success: action.value }
    case CHANGE_TOKENS_ERRORS:
      return { ...state, errors: action.errors }
    case TOGGLE_TOKENS_LOADING:
      return { ...state, loading: action.value }
    default:
      return state
  }
}

export default tokens
