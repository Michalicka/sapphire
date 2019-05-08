
import { changeTokensErrors, toggleTokensLoading, tokensSuccess } from '../actions/tokens'
import { tokens as tokensLink } from '../apiLinks'
import { POST_TOKENS_REQUEST } from '../actionTypes/tokens'
import { fetchEntity } from './utils'
import { put, call } from 'redux-saga/effects'

export function setToken(token, type) {
  localStorage.setItem('accessToken', token)
  localStorage.setItem('tokenType', type)
}

export const postTokens = fetchEntity.bind(
  null,
  'post',
  tokensLink,
  {
    request: POST_TOKENS_REQUEST,
    success: [
      response => call(setToken, response.data.data.access_token, response.data.data.token_type),
      () => put(changeTokensErrors({})),
      () => put(tokensSuccess(true))
    ],
    error: errors => changeTokensErrors(errors),
    loading: value => toggleTokensLoading(value)
  }
)
