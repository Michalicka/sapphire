
import { all, fork } from 'redux-saga/effects'
import { postUsers } from './user'
import { postTokens } from './tokens'

export default function* rootSaga() {
  yield all([
    fork(postUsers),
    fork(postTokens)
  ])
}
