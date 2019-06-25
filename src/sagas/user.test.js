
import { put, call, take } from 'redux-saga/effects'
import { changeUserData, changeUserErrors, toggleUserLoading, changeUserParam, getMeRequest, mergeUserData, putPasswordsRequest, postAvatarRequest } from '../actions/profile'
import { changeModal } from '../actions/modal'
import { putTokensRequest } from '../actions/tokens'
import { changeMessagebarParam } from '../actions/messagebar'
import { users as usersLink, me as meLink, user as userLink, passwords as passwordsLink, avatars as avatarsLink } from '../apiLinks'
import { POST_USERS_REQUEST, GET_ME_REQUEST, PUT_USERS_REQUEST, PUT_PASSWORDS_REQUEST, POST_AVATAR_REQUEST } from '../actionTypes/profile'
import axios from 'axios'
import { postUsers, getMe, putUsers, putPasswords, postAvatar } from './user'
import { formatErrors, headers } from './utils'

// jest.mock('axios')

describe('sagas user', () => {
  describe('postUsers tests', () => {
    let gen
    const registrationAction = {
      type: POST_USERS_REQUEST,
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
      expect(gen.next().value).toEqual(take(POST_USERS_REQUEST))
      expect(gen.next(registrationAction).value).toEqual(put(toggleUserLoading(true)))
      const apiCall = call(axios.post, usersLink, registrationAction.payload)
      expect(gen.next().value).toEqual(apiCall)
      expect(gen.next(response).value).toEqual(put(changeUserParam('registrationSuccess', true)))
      expect(gen.next(response).value).toEqual(put(changeUserErrors({})))
      expect(gen.next(response).value).toEqual(put(changeMessagebarParam('variant', 'success')))
      expect(gen.next(response).value).toEqual(put(changeMessagebarParam('message', 'Registration was successful')))
      expect(gen.next(response).value).toEqual(put(changeMessagebarParam('open', true)))
      expect(gen.next().value).toEqual(put(toggleUserLoading(false)))
      expect(gen.next().value).toEqual(take(POST_USERS_REQUEST))
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
      expect(gen.next().value).toEqual(take(POST_USERS_REQUEST))
      expect(gen.next(registrationAction).value).toEqual(put(toggleUserLoading(true)))
      const apiCall = call(axios.post, usersLink, registrationAction.payload)
      expect(gen.next().value).toEqual(apiCall)
      expect(gen.throw(errorBody).value).toEqual(put(changeUserErrors(formatErrors(errorBody.response.data.errors))))
      expect(gen.next().value).toEqual(put(toggleUserLoading(false)))
      expect(gen.next().value).toEqual(take(POST_USERS_REQUEST))
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

  describe('putUsers tests', () => {
    let gen
    const putUsersAction = {
      type: PUT_USERS_REQUEST,
      payload: {
        name: 'name',
        email: 'john@doe.com'
      },
      urlParams: {
        id: 1
      }
    }
    const apiCall = call(axios.put, userLink(putUsersAction.urlParams), putUsersAction.payload, { headers: headers() })

    beforeEach(() => {
      gen = putUsers()
    })

    it('should return putUsers success flow', () => {
      const response = {}
      expect(gen.next().value).toEqual(take(PUT_USERS_REQUEST))
      expect(gen.next(putUsersAction).value).toEqual(put(toggleUserLoading(true)))
      expect(gen.next().value).toEqual(apiCall)
      expect(gen.next(response).value).toEqual(put(mergeUserData(putUsersAction.payload)))
      expect(gen.next().value).toEqual(put(changeModal('editProfile', { show: false })))
      expect(gen.next().value).toEqual(put(changeUserErrors({})))
      expect(gen.next().value).toEqual(put(toggleUserLoading(false)))
      expect(gen.next().value).toEqual(take(PUT_USERS_REQUEST))
    })

    it('should return putUsers validation error flow', () => {
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
      expect(gen.next().value).toEqual(take(PUT_USERS_REQUEST))
      expect(gen.next(putUsersAction).value).toEqual(put(toggleUserLoading(true)))
      expect(gen.next().value).toEqual(apiCall)
      expect(gen.throw(errorBody).value).toEqual(put(changeUserErrors(formatErrors(errorBody.response.data.errors))))
      expect(gen.next().value).toEqual(put(toggleUserLoading(false)))
      expect(gen.next().value).toEqual(take(PUT_USERS_REQUEST))
    })

    it('should return putUsers authentication error flow', () => {
      const errorBody = {
        response: {
          status: 401
        }
      }
      expect(gen.next().value).toEqual(take(PUT_USERS_REQUEST))
      expect(gen.next(putUsersAction).value).toEqual(put(toggleUserLoading(true)))
      expect(gen.next().value).toEqual(apiCall)
      expect(gen.throw(errorBody).value).toEqual(put(putTokensRequest(putUsersAction)))
      expect(gen.next().value).toEqual(put(toggleUserLoading(false)))
      expect(gen.next().value).toEqual(take(PUT_USERS_REQUEST))
    })
  })

  describe('putPasswords tests', () => {
    let gen
    const payload = {
      password: 'password',
      password_confirmation: 'password_confirmation'
    }
    const putPasswordsAction = putPasswordsRequest(payload)

    const apiCall = call(axios.put, passwordsLink, putPasswordsAction.payload, { headers: headers() })

    beforeEach(() => {
      gen = putPasswords()
    })

    it('should return putPasswords success flow', () => {
      expect(gen.next().value).toEqual(take(PUT_PASSWORDS_REQUEST))
      expect(gen.next(putPasswordsAction).value).toEqual(put(toggleUserLoading(true)))
      expect(gen.next().value).toEqual(apiCall)
      expect(gen.next().value).toEqual(put(changeModal('changePassword', { show: false })))
      expect(gen.next().value).toEqual(put(changeUserErrors({})))
      expect(gen.next().value).toEqual(put(toggleUserLoading(false)))
      expect(gen.next().value).toEqual(take(PUT_PASSWORDS_REQUEST))
    })

    it('should return putPasswords validation error flow', () => {
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
      expect(gen.next().value).toEqual(take(PUT_PASSWORDS_REQUEST))
      expect(gen.next(putPasswordsAction).value).toEqual(put(toggleUserLoading(true)))
      expect(gen.next().value).toEqual(apiCall)
      expect(gen.throw(errorBody).value).toEqual(put(changeUserErrors(formatErrors(errorBody.response.data.errors))))
      expect(gen.next().value).toEqual(put(toggleUserLoading(false)))
      expect(gen.next().value).toEqual(take(PUT_PASSWORDS_REQUEST))
    })

    it('should return putPasswords authentication error flow', () => {
      const errorBody = {
        response: {
          status: 401
        }
      }
      expect(gen.next().value).toEqual(take(PUT_PASSWORDS_REQUEST))
      expect(gen.next(putPasswordsAction).value).toEqual(put(toggleUserLoading(true)))
      expect(gen.next().value).toEqual(apiCall)
      expect(gen.throw(errorBody).value).toEqual(put(putTokensRequest(putPasswordsAction)))
      expect(gen.next().value).toEqual(put(toggleUserLoading(false)))
      expect(gen.next().value).toEqual(take(PUT_PASSWORDS_REQUEST))
    })
  })

  describe('postAvatars tests', () => {
    let gen
    const payload = {
      photo: 'image'
    }
    const postAvatarAction = postAvatarRequest(payload)

    const apiCall = call(axios.post, avatarsLink, postAvatarAction.payload, { headers: headers() })

    beforeEach(() => {
      gen = postAvatar()
    })

    it('should return postAvatars success flow', () => {
      expect(gen.next().value).toEqual(take(POST_AVATAR_REQUEST))
      expect(gen.next(postAvatarAction).value).toEqual(put(toggleUserLoading(true)))
      expect(gen.next().value).toEqual(apiCall)
      expect(gen.next().value).toEqual(put(mergeUserData({ avatar: postAvatarAction.payload.photo })))
      expect(gen.next().value).toEqual(put(changeModal('changeAvatar', { show: false })))
      expect(gen.next().value).toEqual(put(changeUserErrors({})))
      expect(gen.next().value).toEqual(put(toggleUserLoading(false)))
      expect(gen.next().value).toEqual(take(POST_AVATAR_REQUEST))
    })

    it('should return postAvatars validation error flow', () => {
      const errorBody = {
        response: {
          status: 422,
          data: {
            errors: {
              photo: ['error', 'error2']
            }
          }
        }
      }
      expect(gen.next().value).toEqual(take(POST_AVATAR_REQUEST))
      expect(gen.next(postAvatarAction).value).toEqual(put(toggleUserLoading(true)))
      expect(gen.next().value).toEqual(apiCall)
      expect(gen.throw(errorBody).value).toEqual(put(changeUserErrors(formatErrors(errorBody.response.data.errors))))
      expect(gen.next().value).toEqual(put(toggleUserLoading(false)))
      expect(gen.next().value).toEqual(take(POST_AVATAR_REQUEST))
    })

    it('should return postAvatars authentication error flow', () => {
      const errorBody = {
        response: {
          status: 401
        }
      }
      expect(gen.next().value).toEqual(take(POST_AVATAR_REQUEST))
      expect(gen.next(postAvatarAction).value).toEqual(put(toggleUserLoading(true)))
      expect(gen.next().value).toEqual(apiCall)
      expect(gen.throw(errorBody).value).toEqual(put(putTokensRequest(postAvatarAction)))
      expect(gen.next().value).toEqual(put(toggleUserLoading(false)))
      expect(gen.next().value).toEqual(take(POST_AVATAR_REQUEST))
    })
  })
})
