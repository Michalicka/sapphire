
import { all, fork } from 'redux-saga/effects'
import { postUsers, getMe } from './user'
import { postTokens, putTokensWatch, refreshToken } from './tokens'

export default function* rootSaga() {
  yield all([
    fork(postUsers),
    fork(postTokens),
    fork(putTokensWatch),
    fork(getMe),
    fork(refreshToken)
  ])
}
