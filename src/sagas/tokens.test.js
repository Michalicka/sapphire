
import { put, call, take, delay, takeEvery } from 'redux-saga/effects'
import { changeTokensErrors, toggleTokensLoading, changeTokensStatus, putTokensRequest, refreshTokenWatch } from '../actions/tokens'
import { tokens as tokensLink } from '../apiLinks'
import { POST_TOKENS_REQUEST, REFRESH_TOKEN_WATCH, PUT_TOKENS_REQUEST } from '../actionTypes/tokens'
import axios from 'axios'
import { postTokens, setToken, removeToken, refreshToken, putTokens, putTokensWatch } from './tokens'
import { formatErrors, headers } from './utils'

// jest.mock('axios')

describe('sagas tokens', () => {
  describe('postTokens tests', () => {
    let gen
    const registrationAction = {
      type: POST_TOKENS_REQUEST,
      payload: {
        name: 'name',
        password: 'password'
      }
    }

    beforeEach(() => {
      gen = postTokens()
    })

    afterEach(() => {
      jest.restoreAllMocks()
    })

    it('should return postTokens success flow', () => {
      const response = {
        data: {
          data: {
            access_token: 'fijasdp',
            token_type: 'bearer',
            expires_in: 3600
          }
        }
      }

      expect(gen.next().value).toEqual(take(POST_TOKENS_REQUEST))
      expect(gen.next(registrationAction).value).toEqual(put(toggleTokensLoading(true)))

      const apiCall = call(axios.post, tokensLink, registrationAction.payload)

      expect(gen.next().value).toEqual(apiCall)
      expect(gen.next(response).value).toEqual(call(setToken, response.data.data))
      expect(gen.next().value).toEqual(put(changeTokensErrors({})))
      expect(gen.next().value).toEqual(put(changeTokensStatus('Authorized')))
      expect(gen.next().value).toEqual(put(toggleTokensLoading(false)))
      expect(gen.next().value).toEqual(take(POST_TOKENS_REQUEST))
    })

    it('should return postTokens error flow', () => {
      const errorBody = {
        response: {
          status: 422,
          data: {
            errors: {
              name: ['error', 'error2']
            }
          }
        }
      }

      expect(gen.next().value).toEqual(take(POST_TOKENS_REQUEST))
      expect(gen.next(registrationAction).value).toEqual(put(toggleTokensLoading(true)))

      const apiCall = call(axios.post, tokensLink, registrationAction.payload)

      expect(gen.next().value).toEqual(apiCall)
      expect(gen.throw(errorBody).value).toEqual(put(changeTokensErrors(formatErrors(errorBody.response.data.errors))))
      expect(gen.next().value).toEqual(put(toggleTokensLoading(false)))
      expect(gen.next().value).toEqual(take(POST_TOKENS_REQUEST))
    })
  })

  it('should return refreshToken flow', () => {
    const tokenExpiresIn = new Date().getTime() + 3600000
    const gen = refreshToken()
    const delayTime = Math.round((tokenExpiresIn - new Date().getTime()) * 0.8)

    localStorage.setItem('tokensExpiresIn', tokenExpiresIn)

    expect(gen.next().value).toEqual(take(REFRESH_TOKEN_WATCH))
    expect(gen.next().value).toEqual(delay(delayTime))
    expect(gen.next().value).toEqual(put(putTokensRequest()))
    expect(gen.next().value).toEqual(take(REFRESH_TOKEN_WATCH))
  })

  it('should return putTokensWatch flow', () => {
    const gen = putTokensWatch()
    expect(gen.next().value).toEqual(takeEvery(PUT_TOKENS_REQUEST, putTokens))
    expect(gen.next().done).toBe(true)
  })

  describe('putTokens', () => {
    const response = {
      data: {
        data: {
          access_token: 'fijasdp',
          token_type: 'bearer',
          expires_in: 3600
        }
      }
    }
    const action = {
      type: 'ACTION',
      afterAction: {
        type: 'AFTER_ACTION'
      }
    }
    const apiCall = call(axios.put, tokensLink, undefined, { headers: headers() })

    it('should retun putTokens success flow with afterAction', () => {
      const gen = putTokens(action)

      expect(gen.next().value).toEqual(apiCall)
      expect(gen.next(response).value).toEqual(call(setToken, response.data.data))
      expect(gen.next().value).toEqual(put(action.afterAction))
      expect(gen.next().value).toEqual(put(refreshTokenWatch()))
      expect(gen.next().value).toEqual(put(changeTokensStatus('Authorized')))
      expect(gen.next().done).toBe(true)
    })

    it('should return putTokens success flow without afterAction', () => {
      const gen = putTokens({ ...action, afterAction: undefined })

      expect(gen.next().value).toEqual(apiCall)
      expect(gen.next(response).value).toEqual(call(setToken, response.data.data))
      expect(gen.next().value).toEqual(put(refreshTokenWatch()))
      expect(gen.next().value).toEqual(put(changeTokensStatus('Authorized')))
      expect(gen.next().done).toBe(true)
    })

    it('should return putTokens error flow', () => {
      const gen = putTokens(action)

      expect(gen.next().value).toEqual(apiCall)
      expect(gen.throw().value).toEqual(call(removeToken))
      expect(gen.next().value).toEqual(put(changeTokensStatus('Unauthorized')))
      expect(gen.next().done).toBe(true)
    })
  })

  describe('localStorage update tests', () => {
    const token = 'token'
    const type = 'type'
    const time = new Date().getTime()
    /* eslint-disable camelcase */
    const expires_in = 3600

    beforeEach(() => {
      localStorage.clear()
    })

    it('should add items for authentication to localStorage', () => {
      setToken({ token, type, expires_in })
      expect(localStorage.getItem('accessToken')).toBe(token)
      expect(localStorage.getItem('tokenType')).toBe(type)
      const expectedExpiration = Math.round(time + expires_in * 1000)
      expect(parseInt(localStorage.getItem('tokenExpiresIn'))).toBe(expectedExpiration)
    })

    it('should remove items for authentication from localStorage', () => {
      setToken({ token, type, expires_in })
      removeToken()
      expect(localStorage.getItem('accessToken')).toBe(null)
      expect(localStorage.getItem('tokenType')).toBe(null)
      expect(localStorage.getItem('tokenExpiresIn')).toBe(null)
    })
  })
})
