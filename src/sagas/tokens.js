
import { changeTokensErrors, toggleTokensLoading, changeTokensStatus, putTokensRequest, refreshTokenWatch } from '../actions/tokens'
import { userRestore } from '../actions/profile'
import { tokens as tokensLink } from '../apiLinks'
import { POST_TOKENS_REQUEST, REFRESH_TOKEN_WATCH, PUT_TOKENS_REQUEST, DELETE_TOKENS_REQUEST } from '../actionTypes/tokens'
import { fetchEntity, headers, fetchLoggedEntity } from './utils'
import { put, call, delay, take, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

export function setToken(data) {
  localStorage.setItem('accessToken', data.access_token)
  localStorage.setItem('tokenType', data.token_type)
  localStorage.setItem('tokenExpiresIn', new Date().getTime() + data.expires_in * 60000)
}

export function removeToken() {
  localStorage.removeItem('accessToken')
  localStorage.removeItem('tokenType')
  localStorage.removeItem('tokenExpiresIn')
}

const postTokensKey = 'postTokens'
const postTokensErrors = changeTokensErrors(postTokensKey)
const postTokensLoading = toggleTokensLoading(postTokensKey)

export const postTokens = fetchEntity.bind(
  null,
  'post',
  tokensLink,
  {
    request: POST_TOKENS_REQUEST,
    success: [
      response => call(setToken, response.data.data),
      () => put(postTokensErrors({})),
      () => put(changeTokensStatus('Authorized'))
    ],
    error: postTokensErrors,
    loading: postTokensLoading
  }
)

export function* refreshToken() {
  while (true) {
    yield take(REFRESH_TOKEN_WATCH)
    const expiresIn = parseInt(localStorage.getItem('tokenExpiresIn'))
    const delayTime = Math.round((expiresIn - new Date().getTime()) * 0.8)
    yield delay(delayTime)
    yield put(putTokensRequest())
  }
}

export function* putTokensWatch() {
  yield takeEvery(PUT_TOKENS_REQUEST, putTokens)
}

export function* putTokens(action) {
  try {
    const response = yield call(axios.put, tokensLink, undefined, { headers: headers() })
    yield call(setToken, response.data.data)
    if (action.afterAction) {
      yield put(action.afterAction)
    }
    yield put(refreshTokenWatch())
    yield put(changeTokensStatus('Authorized'))
  } catch (error) {
    yield call(removeToken)
    yield put(changeTokensStatus('Unauthorized'))
  }
}

const deleteTokensKey = 'deleteTokens'
const deleteTokensErrors = changeTokensErrors(deleteTokensKey)
const deleteTokensLoading = toggleTokensLoading(deleteTokensKey)

export const deleteTokens = fetchLoggedEntity.bind(
  null,
  'delete',
  tokensLink,
  {
    request: DELETE_TOKENS_REQUEST,
    success: [
      () => put(changeTokensStatus('Unauthorized')),
      () => call(removeToken),
      () => put(userRestore())
    ],
    error: deleteTokensErrors,
    loading: deleteTokensLoading
  }
)
