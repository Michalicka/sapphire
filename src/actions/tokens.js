
import { POST_TOKENS_REQUEST, POST_TOKENS_SUCCESS, CHANGE_TOKENS_ERRORS } from '../actionTypes/tokens'

export function postTokensRequest(payload) {
  return {
    type: POST_TOKENS_REQUEST,
    payload
  }
}

export function postTokensSuccess() {
  return {
    type: POST_TOKENS_SUCCESS
  }
}

export function changeTokensErrors(errors) {
  return {
    type: CHANGE_TOKENS_ERRORS,
    errors
  }
}
