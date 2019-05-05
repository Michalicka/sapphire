
import { put, call, take } from 'redux-saga/effects'
import { postTokensSuccess, changeTokensErrors, toggleTokensLoading } from '../actions/tokens'
import { tokens as tokensLink } from '../apiLinks'
import { POST_TOKENS_REQUEST } from '../actionTypes/tokens'
import axios from 'axios'
import { postTokens, setToken } from './tokens'
import { LocalStorageMock } from '../testUtils'
import { formatErrors } from './utils'

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
    it('should return postUsers success flow', () => {
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
      expect(gen.next(response).value).toEqual(call(setToken, response.data.data.access_token, response.data.data.token_type))
      expect(gen.next(response).value).toEqual(put(changeTokensErrors({})))
      expect(gen.next(response).value).toEqual(put(postTokensSuccess()))
      expect(gen.next().value).toEqual(put(toggleTokensLoading(false)))
      expect(gen.next().value).toEqual(take(POST_TOKENS_REQUEST))
    })
    it('should return postUsers error flow', () => {
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
  describe('setToken tests', () => {
    it('should return expected localStorage', () => {
      window.localStorage = new LocalStorageMock()
      const token = 'token'
      const type = 'type'
      setToken(token, type)
      expect(localStorage.getItem('accessToken')).toBe(token)
      expect(localStorage.getItem('tokenType')).toBe(type)
    })
  })
})
