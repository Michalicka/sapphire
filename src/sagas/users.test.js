
import { headers, formatErrors } from './utils'
import { users as usersLink } from '../apiLinks'
import { GET_USERS_REQUEST } from '../actionTypes/users'
import { changeUsersErrors, changeUsersData, toggleUsersLoading, getUsersRequest } from '../actions/users'
import { put, call, take } from 'redux-saga/effects'
import axios from 'axios'
import { putTokensRequest } from '../actions/tokens'
import { getUsers } from './users'

describe('users saga', () => {
  describe('getUsers', () => {
    const name = 'name'
    const fakeAction = getUsersRequest(name)
    const apiCall = call(axios.get, usersLink, { headers: headers(), params: fakeAction.payload })
    let gen

    beforeEach(() => {
      gen = getUsers()
    })

    it('should return getUsers success flow', () => {
      const response = {
        data: {
          data: [
            {
              id: 1,
              name: 'user',
              email: 'user@user.com',
              avatar: 'https://www.google.com/'
            }
          ]
        }
      }

      expect(gen.next().value).toEqual(take(GET_USERS_REQUEST))
      expect(gen.next(fakeAction).value).toEqual(put(toggleUsersLoading(true)))
      expect(gen.next().value).toEqual(apiCall)
      expect(gen.next(response).value).toEqual(put(changeUsersErrors({})))
      expect(gen.next().value).toEqual(put(changeUsersData(response.data.data)))
      expect(gen.next(fakeAction).value).toEqual(put(toggleUsersLoading(false)))
      expect(gen.next().value).toEqual(take(GET_USERS_REQUEST))
    })

    it('should return getUsers error validation flow', () => {
      const error = {
        response: {
          status: 422,
          data: {
            errors: {
              name: ['error']
            }
          }
        }
      }

      expect(gen.next().value).toEqual(take(GET_USERS_REQUEST))
      expect(gen.next(fakeAction).value).toEqual(put(toggleUsersLoading(true)))
      expect(gen.next().value).toEqual(apiCall)
      expect(gen.throw(error).value).toEqual(put(changeUsersErrors(formatErrors(error.response.data.errors))))
      expect(gen.next(fakeAction).value).toEqual(put(toggleUsersLoading(false)))
      expect(gen.next().value).toEqual(take(GET_USERS_REQUEST))
    })

    it('should return getUsers error authentication flow', () => {
      const errorBody = {
        response: {
          status: 401
        }
      }
      expect(gen.next().value).toEqual(take(GET_USERS_REQUEST))
      expect(gen.next(fakeAction).value).toEqual(put(toggleUsersLoading(true)))
      expect(gen.next().value).toEqual(apiCall)
      expect(gen.throw(errorBody).value).toEqual(put(putTokensRequest(fakeAction)))
      expect(gen.next().value).toEqual(put(toggleUsersLoading(false)))
      expect(gen.next().value).toEqual(take(GET_USERS_REQUEST))
    })
  })
})
