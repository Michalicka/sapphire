
import { CHANGE_TOKENS_ERRORS, TOGGLE_TOKENS_LOADING, CHANGE_TOKENS_STATUS } from '../actionTypes/tokens'
import { getDefaultValues, changeErrorsParam, changeLoadingParam, changeDataParam } from './utils'

const tokensDefault = getDefaultValues(['postTokens', 'putTokens', 'deleteTokens'])

const initialState = {
  data: {
    status: null
  },
  errors: tokensDefault({}),
  loading: tokensDefault(false)
}

function tokens(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TOKENS_ERRORS:
      return changeErrorsParam(state, action)
    case TOGGLE_TOKENS_LOADING:
      return changeLoadingParam(state, action)
    case CHANGE_TOKENS_STATUS:
      return changeDataParam(state, action)
    default:
      return state
  }
}

export default tokens
