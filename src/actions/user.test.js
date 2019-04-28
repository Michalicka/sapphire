
import { USER_REGISTRATION, CHANGE_USER_DATA, CHANGE_USER_PARAM, CHANGE_USER_ERRORS, TOGGLE_USER_LOADNIG } from '../actionTypes/user'
import { userRegistration, changeUserData, changeUserParam, changeUserErrors, toggleUserLoading } from './user'

describe('user actions', () => {
  it('user registration', () => {
    const expectedOutput = {
      type: USER_REGISTRATION
    }

    expect(userRegistration()).toEqual(expectedOutput)
  })

  it('change user data', () => {
    const data = {
      id: 1,
      name: 'name',
      email: 'name@email.com',
      image: 'https://www.google.com/'
    }
    const expectedOutput = {
      type: CHANGE_USER_DATA,
      data
    }

    expect(changeUserData(data)).toEqual(expectedOutput)
  })

  it('change user param', () => {
    const key = 'key'
    const value = 'value'
    const expectedOutput = {
      type: CHANGE_USER_PARAM,
      key,
      value
    }

    expect(changeUserParam(key, value)).toEqual(expectedOutput)
  })

  it('change user errors', () => {
    const errors = {
      name: 'error',
      email: 'error',
      password: 'error',
      password_confirmation: 'error'
    }

    const expectedOutput = {
      type: CHANGE_USER_ERRORS,
      errors
    }

    expect(changeUserErrors(errors)).toEqual(expectedOutput)
  })

  it('toggle user loading', () => {
    const expectedOutput = {
      type: TOGGLE_USER_LOADNIG,
      value: true
    }

    expect(toggleUserLoading(true)).toEqual(expectedOutput)
  })
})
