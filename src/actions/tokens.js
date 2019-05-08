
import { POST_TOKENS_REQUEST, TOKENS_SUCCESS, CHANGE_TOKENS_ERRORS, TOGGLE_TOKENS_LOADING } from '../actionTypes/tokens'

export function postTokensRequest(payload) {
  return {
    type: POST_TOKENS_REQUEST,
    payload
  }
}

export function tokensSuccess(value) {
  return {
    type: TOKENS_SUCCESS,
    value
  }
}

export function changeTokensErrors(errors) {
  return {
    type: CHANGE_TOKENS_ERRORS,
    errors
  }
}

export function toggleTokensLoading(value) {
  return {
    type: TOGGLE_TOKENS_LOADING,
    value
  }
}
