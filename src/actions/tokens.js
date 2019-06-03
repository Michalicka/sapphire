
import { POST_TOKENS_REQUEST, CHANGE_TOKENS_STATUS, CHANGE_TOKENS_ERRORS, TOGGLE_TOKENS_LOADING, REFRESH_TOKEN_WATCH, PUT_TOKENS_REQUEST, DELETE_TOKENS_REQUEST } from '../actionTypes/tokens'

export function postTokensRequest(payload) {
  return {
    type: POST_TOKENS_REQUEST,
    payload
  }
}

export function changeTokensStatus(value) {
  return {
    type: CHANGE_TOKENS_STATUS,
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

export function refreshTokenWatch() {
  return {
    type: REFRESH_TOKEN_WATCH
  }
}

export function putTokensRequest(nextAction) {
  return {
    type: PUT_TOKENS_REQUEST,
    nextAction
  }
}

export function deleteTokensRequest() {
  return {
    type: DELETE_TOKENS_REQUEST
  }
}
