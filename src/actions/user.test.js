
import { POST_USERS_REQUEST, CHANGE_USER_DATA, CHANGE_USER_PARAM, CHANGE_USER_ERRORS, TOGGLE_USER_LOADNIG, GET_ME_REQUEST, USER_RESTORE, PUT_USERS_REQUEST, MERGE_USER_DATA, PUT_PASSWORDS_REQUEST, POST_AVATAR_REQUEST } from '../actionTypes/profile'
import { postUsersRequest, changeUserData, changeUserParam, changeUserErrors, toggleUserLoading, getMeRequest, userRestore, putUserRequest, mergeUserData, putPasswordsRequest, postAvatarRequest } from './user'

describe('user actions', () => {
  it('user registration', () => {
    const expectedOutput = {
      type: POST_USERS_REQUEST
    }

    expect(postUsersRequest()).toEqual(expectedOutput)
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

  it('getMeRequest', () => {
    const expectedOutput = {
      type: GET_ME_REQUEST
    }

    expect(getMeRequest()).toEqual(expectedOutput)
  })

  it('userRestore', () => {
    const expectedOutput = {
      type: USER_RESTORE
    }

    expect(userRestore()).toEqual(expectedOutput)
  })

  it('putUserRequest', () => {
    const urlParams = {
      id: 1
    }
    const payload = {
      name: 'name',
      email: 'email@email.com'
    }
    const expectedOutput = {
      type: PUT_USERS_REQUEST,
      payload,
      urlParams
    }

    expect(putUserRequest(payload, urlParams)).toEqual(expectedOutput)
  })

  it('mergeUserData', () => {
    const data = {
      name: 'name',
      email: 'email@email.com'
    }
    const expectedOutput = {
      type: MERGE_USER_DATA,
      data
    }

    expect(mergeUserData(data)).toEqual(expectedOutput)
  })

  it('putPasswordsRequest', () => {
    const payload = {
      password: 'password',
      password_confirmation: 'password_confirmation'
    }
    const expectedOutput = {
      type: PUT_PASSWORDS_REQUEST,
      payload
    }

    expect(putPasswordsRequest(payload)).toEqual(expectedOutput)
  })

  it('putPasswordsRequest', () => {
    const payload = {
      avatar: 'image'
    }
    const expectedOutput = {
      type: POST_AVATAR_REQUEST,
      payload
    }

    expect(postAvatarRequest(payload)).toEqual(expectedOutput)
  })
})
