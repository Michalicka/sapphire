
import { TOKENS_SUCCESS, CHANGE_TOKENS_ERRORS, TOGGLE_TOKENS_LOADING, CHANGE_TOKENS_STATUS } from '../actionTypes/tokens'

const initialState = {
  errors: {},
  loading: false
}

function tokens(state = initialState, action) {
  switch (action.type) {
    case TOKENS_SUCCESS:
      return { ...state, success: action.value }
    case CHANGE_TOKENS_ERRORS:
      return { ...state, errors: action.errors }
    case TOGGLE_TOKENS_LOADING:
      return { ...state, loading: action.value }
    case CHANGE_TOKENS_STATUS:
      return { ...state, status: action.value }
    default:
      return state
  }
}

export default tokens
