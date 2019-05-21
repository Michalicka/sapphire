
import { put, call, take } from 'redux-saga/effects'
import axios from 'axios'
import { fetchEntity, formatErrors, fetchLoggedEntity, headers } from './utils'
import { putTokensRequest } from '../actions/tokens'

describe('sagas utils', () => {
  describe('formatErrors function', () => {
    const errors = {
      name: ['error', 'error2'],
      password: ['error2', 'error']
    }
    const expectedErrors = {
      name: 'error',
      password: 'error2'
    }
    expect(formatErrors(errors)).toEqual(expectedErrors)
  })

  describe('fetchEntity tests', () => {
    let gen
    const method = 'get'
    const link = 'https://www.google.com/'
    const entity = {
      request: 'REQUEST',
      success: [
        response => put({
          type: 'SUCCESS',
          response
        })
      ],
      error: error => ({
        type: 'ERROR',
        error
      }),
      loading: value => value
    }
    beforeEach(() => {
      gen = fetchEntity(
        method,
        link,
        entity
      )
    })
    afterEach(() => {
      jest.restoreAllMocks()
    })
    it('should return fetchEntity success flow', () => {
      const fakeAction = {
        type: 'fake',
        payload: {}
      }
      expect(gen.next().value).toEqual(take(entity.request))
      expect(gen.next(fakeAction).value).toEqual(put(entity.loading(true)))
      const apiCall = call(axios[method], link, fakeAction.payload)
      expect(gen.next().value).toEqual(apiCall)
      for (let index = 0; index < entity.success.length; index++) {
        expect(gen.next(apiCall).value).toEqual(entity.success[index](apiCall))
      }
      expect(gen.next(fakeAction).value).toEqual(put(entity.loading(false)))
      expect(gen.next().value).toEqual(take(entity.request))
    })

    it('should return fetchEntity error flow', () => {
      // const response = 'success'
      const errorBody = {
        response: {
          status: 422,
          data: {
            errors: {
              name: ['error']
            }
          }
        }
      }
      const fakeAction = {
        type: 'fake',
        payload: {}
      }
      expect(gen.next().value).toEqual(take(entity.request))
      expect(gen.next(fakeAction).value).toEqual(put(entity.loading(true)))
      const apiCall = call(axios[method], link, fakeAction.payload)
      expect(gen.next().value).toEqual(apiCall)
      expect(gen.throw(errorBody).value).toEqual(put(entity.error(formatErrors(errorBody.response.data.errors))))
      expect(gen.next(fakeAction).value).toEqual(put(entity.loading(false)))
      expect(gen.next().value).toEqual(take(entity.request))
    })
  })

  describe('fetchLoggedEntity tests', () => {
    const fakeAction = {
      type: 'FAKE_ACTION',
      payload: {}
    }
    const link = 'https://www.google.com/'
    const response = {
      data: {
        data: {
          message: 'succcess'
        }
      }
    }
    const success = [
      response => put(({ type: 'TEST', response }))
    ]
    const error = errors => ({ type: 'TEST_ERROR', errors })
    const loading = value => ({ type: 'LOADING', value })
    const request = 'FAKE_ACTION'
    const generator = method => fetchLoggedEntity(
      method,
      link,
      {
        request,
        success,
        error,
        loading
      }
    )

    it('should return fetchLoggedEntity success flow with get method', () => {
      const gen = generator('get')
      const apiCall = call(axios.get, link, { headers: headers(), params: fakeAction.payload })

      expect(gen.next().value).toEqual(take(request))
      expect(gen.next(fakeAction).value).toEqual(put(loading(true)))
      expect(gen.next().value).toEqual(apiCall)
      expect(gen.next(response).value).toEqual(success[0](response))
      expect(gen.next().value).toEqual(put(loading(false)))
      expect(gen.next().value).toEqual(take(request))
    })

    it('should return fetchLoggedEntity success flow with post method', () => {
      const gen = generator('post')
      const apiCall = call(axios.post, link, fakeAction.payload, { headers: headers() })

      expect(gen.next().value).toEqual(take(request))
      expect(gen.next(fakeAction).value).toEqual(put(loading(true)))
      expect(gen.next().value).toEqual(apiCall)
      expect(gen.next(response).value).toEqual(success[0](response))
      expect(gen.next().value).toEqual(put(loading(false)))
      expect(gen.next().value).toEqual(take(request))
    })

    it('should return fetchLoggedEntity success flow with delete method', () => {
      const gen = generator('delete')
      const apiCall = call(axios.delete, link, { headers: headers() })

      expect(gen.next().value).toEqual(take(request))
      expect(gen.next(fakeAction).value).toEqual(put(loading(true)))
      expect(gen.next().value).toEqual(apiCall)
      expect(gen.next(response).value).toEqual(success[0](response))
      expect(gen.next().value).toEqual(put(loading(false)))
      expect(gen.next().value).toEqual(take(request))
    })

    it('should return fetchLoggedEntity error authorization flow', () => {
      const gen = generator('post')
      const apiCall = call(axios.post, link, fakeAction.payload, { headers: headers() })
      const errorBody = {
        response: {
          status: 401
        }
      }

      expect(gen.next().value).toEqual(take(request))
      expect(gen.next(fakeAction).value).toEqual(put(loading(true)))
      expect(gen.next().value).toEqual(apiCall)
      expect(gen.throw(errorBody).value).toEqual(put(putTokensRequest(fakeAction)))
      expect(gen.next().value).toEqual(put(loading(false)))
      expect(gen.next().value).toEqual(take(request))
    })

    it('should return fetchLoggedEntity error validation flow', () => {
      const gen = generator('post')
      const apiCall = call(axios.post, link, fakeAction.payload, { headers: headers() })
      const errorBody = {
        response: {
          status: 422,
          data: {
            errors: {
              name: ['error']
            }
          }
        }
      }

      expect(gen.next().value).toEqual(take(request))
      expect(gen.next(fakeAction).value).toEqual(put(loading(true)))
      expect(gen.next().value).toEqual(apiCall)
      expect(gen.throw(errorBody).value).toEqual(put(error(formatErrors(errorBody.response.data.errors))))
      expect(gen.next().value).toEqual(put(loading(false)))
      expect(gen.next().value).toEqual(take(request))
    })
  })
})
