
import { all, fork } from 'redux-saga/effects'
import { postUsers } from './user'

export default function* rootSaga() {
  yield all([
    fork(postUsers)
  ])
}
