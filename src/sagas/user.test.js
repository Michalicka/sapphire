
import { put, call, take } from 'redux-saga/effects'
import { changeUserData, changeUserErrors, toggleUserLoading, changeUserParam, getMeRequest } from '../actions/user'
import { putTokensRequest } from '../actions/tokens'
import { changeMessagebarParam } from '../actions/messagebar'
import { users as usersLink, me as meLink } from '../apiLinks'
import { USER_REGISTRATION, GET_ME_REQUEST } from '../actionTypes/user'
import axios from 'axios'
import { postUsers, getMe } from './user'
import { formatErrors, headers } from './utils'

// jest.mock('axios')

describe('sagas user', () => {
  describe('postUsers tests', () => {
    let gen
    const registrationAction = {
      type: USER_REGISTRATION,
      payload: {
        name: 'name',
        email: 'john@doe.com',
        password: 'password',
        passwordConfirmation: 'password'
      }
    }
    beforeEach(() => {
      gen = postUsers()
    })
    afterEach(() => {
      jest.restoreAllMocks()
    })
    it('should return postUsers success flow', () => {
      const response = {
        id: null,
        name: '',
        email: '',
        avatar: ''
      }
      expect(gen.next().value).toEqual(take(USER_REGISTRATION))
      expect(gen.next(registrationAction).value).toEqual(put(toggleUserLoading(true)))
      const apiCall = call(axios.post, usersLink, registrationAction.payload)
      expect(gen.next().value).toEqual(apiCall)
      expect(gen.next(response).value).toEqual(put(changeUserParam('registrationSuccess', true)))
      expect(gen.next(response).value).toEqual(put(changeUserErrors({})))
      expect(gen.next(response).value).toEqual(put(changeMessagebarParam('variant', 'success')))
      expect(gen.next(response).value).toEqual(put(changeMessagebarParam('message', 'Registration was successful')))
      expect(gen.next(response).value).toEqual(put(changeMessagebarParam('open', true)))
      expect(gen.next().value).toEqual(put(toggleUserLoading(false)))
      expect(gen.next().value).toEqual(take(USER_REGISTRATION))
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
      expect(gen.next().value).toEqual(take(USER_REGISTRATION))
      expect(gen.next(registrationAction).value).toEqual(put(toggleUserLoading(true)))
      const apiCall = call(axios.post, usersLink, registrationAction.payload)
      expect(gen.next().value).toEqual(apiCall)
      expect(gen.throw(errorBody).value).toEqual(put(changeUserErrors(formatErrors(errorBody.response.data.errors))))
      expect(gen.next().value).toEqual(put(toggleUserLoading(false)))
      expect(gen.next().value).toEqual(take(USER_REGISTRATION))
    })
  })

  describe('getMe tests', () => {
    let gen
    let apiCall

    beforeEach(() => {
      gen = getMe()
      apiCall = call(axios.get, meLink, { headers: headers() })
    })

    it('should return getMe success flow', () => {
      const response = {
        data: {
          data: {
            id: 'name',
            name: 'name',
            email: 'email'
          }
        }
      }
      expect(gen.next().value).toEqual(take(GET_ME_REQUEST))
      expect(gen.next(getMeRequest()).value).toEqual(put(toggleUserLoading(true)))
      expect(gen.next().value).toEqual(apiCall)
      expect(gen.next(response).value).toEqual(put(changeUserData(response.data.data)))
      expect(gen.next().value).toEqual(put(toggleUserLoading(false)))
      expect(gen.next().value).toEqual(take(GET_ME_REQUEST))
    })

    it('should return getMe error authentication flow', () => {
      const errorBody = {
        response: {
          status: 401
        }
      }
      expect(gen.next().value).toEqual(take(GET_ME_REQUEST))
      expect(gen.next(getMeRequest()).value).toEqual(put(toggleUserLoading(true)))
      expect(gen.next().value).toEqual(apiCall)
      expect(gen.throw(errorBody).value).toEqual(put(putTokensRequest(getMeRequest())))
      expect(gen.next().value).toEqual(put(toggleUserLoading(false)))
      expect(gen.next().value).toEqual(take(GET_ME_REQUEST))
    })

    it('should return getMe error validation flow', () => {
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
      expect(gen.next().value).toEqual(take(GET_ME_REQUEST))
      expect(gen.next(getMeRequest()).value).toEqual(put(toggleUserLoading(true)))
      expect(gen.next().value).toEqual(apiCall)
      expect(gen.throw(errorBody).value).toEqual(put(changeUserErrors(formatErrors(errorBody.response.data.errors))))
      expect(gen.next().value).toEqual(put(toggleUserLoading(false)))
      expect(gen.next().value).toEqual(take(GET_ME_REQUEST))
    })
  })
})
