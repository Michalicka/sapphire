
import { put, call, take } from 'redux-saga/effects'
import axios from 'axios'
import { fetchEntity, formatErrors } from './utils'

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
        response => ({
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
        expect(gen.next(apiCall).value).toEqual(put(entity.success[index](apiCall)))
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
})
