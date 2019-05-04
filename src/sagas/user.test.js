
import { put, call, take } from 'redux-saga/effects'
import { changeUserData, changeUserErrors, toggleUserLoading, changeUserParam } from '../actions/user'
import { changeMessagebarParam } from '../actions/messagebar'
import { users as usersLink } from '../apiLinks'
import { USER_REGISTRATION } from '../actionTypes/user'
import axios from 'axios'
import { postUsers } from './user'
import { formatErrors } from './utils'

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
        password: '',
        passwordConfirmation: ''
      }
      expect(gen.next().value).toEqual(take(USER_REGISTRATION))
      expect(gen.next(registrationAction).value).toEqual(put(toggleUserLoading(true)))
      const apiCall = call(axios.post, usersLink, registrationAction.payload)
      expect(gen.next().value).toEqual(apiCall)
      expect(gen.next(response).value).toEqual(put(changeUserData(response)))
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
})
