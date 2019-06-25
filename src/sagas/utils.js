
import { put, call, take } from 'redux-saga/effects'
import axios from 'axios'
import { putTokensRequest } from '../actions/tokens'

export const formatErrors = err => {
  const errors = {}
  Object.keys(err).forEach(error => {
    errors[error] = err[error][0]
  })
  return errors
}

export const headers = () => {
  return {
    Authorization: `${localStorage.getItem('tokenType')} ${localStorage.getItem('accessToken')}`
  }
}

export function* fetchEntity(method, link, entity) {
  while (true) {
    const action = yield take(entity.request)
    yield put(entity.loading(true))
    try {
      const response = yield call(axios[method], link, action.payload)
      for (let index = 0; index < entity.success.length; index++) {
        yield entity.success[index](response)
      }
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

export function* fetchLoggedEntity(method, link, entity) {
  while (true) {
    const action = yield take(entity.request)
    yield put(entity.loading(true))
    try {
      let response
      const url = typeof link === 'function' ? link(action.urlParams) : link
      if (method === 'get') {
        response = yield call(axios[method], url, { headers: headers(), params: action.payload })
      } else if (method === 'delete') {
        response = yield call(axios[method], url, { headers: headers() })
      } else {
        response = yield call(axios[method], url, action.payload, { headers: headers() })
      }
      for (let index = 0; index < entity.success.length; index++) {
        yield entity.success[index](response, action)
      }
    } catch (error) {
      console.log(error)
      if (error.response.status === 401) {
        yield put(putTokensRequest(action))
      } else if (error.response.status === 422) {
        const errors = formatErrors(error.response.data.errors)
        yield put(entity.error(errors))
      }
    }
    yield put(entity.loading(false))
  }
}
