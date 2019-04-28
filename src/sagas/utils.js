
import { put, call, take } from 'redux-saga/effects'
import axios from 'axios'

export const formatErrors = err => {
  const errors = {}
  Object.keys(err).forEach(error => {
    errors[error] = err[error][0]
  })
  return errors
}

export function* fetchEntity(method, link, entity) {
  while (true) {
    const action = yield take(entity.request)
    yield put(entity.loading(true))
    try {
      const response = yield call(axios[method], link, action.payload)
      yield put(entity.success(response))
      yield put(entity.loading(false))
    } catch (error) {
      if (error.response.status === 422) {
        const errors = formatErrors(error.response.data.errors)
        yield put(entity.error(errors))
        yield put(entity.loading(false))
      }
    }
  }
}
