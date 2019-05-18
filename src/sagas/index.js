
import { all, fork } from 'redux-saga/effects'
import { postUsers, getMe } from './user'
import { postTokens, putTokensWatch, refreshToken } from './tokens'
import { getProjects } from './projects'

export default function* rootSaga() {
  yield all([
    fork(postUsers),
    fork(postTokens),
    fork(putTokensWatch),
    fork(getMe),
    fork(refreshToken),
    fork(getProjects)
  ])
}
