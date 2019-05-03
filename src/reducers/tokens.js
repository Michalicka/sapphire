
import { POST_TOKENS_SUCCESS, CHANGE_TOKENS_ERRORS } from '../actionTypes/tokens'

const initialState = {
  errors: {}
}

function tokens(state = initialState, action) {
  switch (action.type) {
    case POST_TOKENS_SUCCESS:
      return { ...state, postTokensSuccess: true }
    case CHANGE_TOKENS_ERRORS:
      return { ...state, errors: action.errors }
    default:
      return state
  }
}

export default tokens
