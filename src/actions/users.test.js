
import { GET_USERS_REQUEST, CHANGE_USERS_DATA, CHANGE_USERS_ERRORS, TOGGLE_USERS_LOADING } from '../actionTypes/users'
import { getUsersRequest, changeUsersData, changeUsersErrors, toggleUsersLoading } from './users'

describe('users action', () => {
  it('getUsersRequest', () => {
    const name = 'user'
    const expectedValue = {
      type: GET_USERS_REQUEST,
      payload: {
        name
      }
    }

    expect(getUsersRequest(name)).toEqual(expectedValue)
  })

  it('changeUsersData', () => {
    const data = [
      {
        id: 1,
        name: 'user',
        email: 'user@user.com',
        avatar: 'https://www.google.com/'
      },
      {
        id: 2,
        name: 'user2',
        email: 'user2@user.com',
        avatar: 'https://www.google.com/'
      }
    ]
    const expectedValue = {
      type: CHANGE_USERS_DATA,
      data
    }

    expect(changeUsersData(data)).toEqual(expectedValue)
  })

  it('changeUsersErrors', () => {
    const errors = {
      name: 'error'
    }
    const expectedValue = {
      type: CHANGE_USERS_ERRORS,
      errors
    }

    expect(changeUsersErrors(errors)).toEqual(expectedValue)
  })

  it('toggleUsersLoading', () => {
    const value = true
    const expectedValue = {
      type: TOGGLE_USERS_LOADING,
      value
    }

    expect(toggleUsersLoading(value)).toEqual(expectedValue)
  })
})
