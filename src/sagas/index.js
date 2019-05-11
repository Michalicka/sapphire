
import { all, fork } from 'redux-saga/effects'
import { postUsers } from './user'
import { postTokens, putTokensWatch } from './tokens'

export default function* rootSaga() {
  yield all([
    fork(postUsers),
    fork(postTokens),
    fork(putTokensWatch)
  ])
}
