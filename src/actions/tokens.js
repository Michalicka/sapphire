
import { POST_TOKENS_REQUEST, CHANGE_TOKENS_STATUS, CHANGE_TOKENS_ERRORS, TOGGLE_TOKENS_LOADING, REFRESH_TOKEN_WATCH, PUT_TOKENS_REQUEST, DELETE_TOKENS_REQUEST } from '../actionTypes/tokens'

export const postTokensRequest = payload => ({
  type: POST_TOKENS_REQUEST,
  payload
})

export const changeTokensStatus = value => ({
  type: CHANGE_TOKENS_STATUS,
  key: 'status',
  value
})

export const changeTokensErrors = key => value => ({
  type: CHANGE_TOKENS_ERRORS,
  key,
  value
})

export const toggleTokensLoading = key => value => ({
  type: TOGGLE_TOKENS_LOADING,
  key,
  value
})

export const refreshTokenWatch = () => ({
  type: REFRESH_TOKEN_WATCH
})

export const putTokensRequest = nextAction => ({
  type: PUT_TOKENS_REQUEST,
  nextAction
})

export const deleteTokensRequest = () => ({
  type: DELETE_TOKENS_REQUEST
})
