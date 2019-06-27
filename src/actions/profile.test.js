
import { POST_USERS_REQUEST, CHANGE_USER_DATA, CHANGE_USER_PARAM, CHANGE_USER_ERRORS, TOGGLE_USER_LOADNIG, GET_ME_REQUEST, USER_RESTORE, PUT_USERS_REQUEST, MERGE_USER_DATA, PUT_PASSWORDS_REQUEST, POST_AVATAR_REQUEST } from '../actionTypes/profile'
import { postUsersRequest, changeUserData, changeUserParam, changeUserErrors, toggleUserLoading, getMeRequest, userRestore, putUserRequest, mergeUserData, putPasswordsRequest, postAvatarRequest } from './profile'

describe('profile actions', () => {
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

  it('changeUserErrors', () => {
    const key = 'errors'
    const errors = {
      name: 'error',
      email: 'error',
      password: 'error',
      password_confirmation: 'error'
    }

    const expectedOutput = {
      type: CHANGE_USER_ERRORS,
      key,
      value: errors
    }

    expect(changeUserErrors(key)(errors)).toEqual(expectedOutput)
  })

  it('toggleUserLoading', () => {
    const key = 'loading'
    const expectedOutput = {
      type: TOGGLE_USER_LOADNIG,
      key,
      value: true
    }

    expect(toggleUserLoading(key)(true)).toEqual(expectedOutput)
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

  it('postAvatarRequest', () => {
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
