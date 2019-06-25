
import { POST_USERS_REQUEST, CHANGE_USER_DATA, CHANGE_USER_PARAM, CHANGE_USER_ERRORS, TOGGLE_USER_LOADNIG, GET_ME_REQUEST, USER_RESTORE, PUT_USERS_REQUEST, MERGE_USER_DATA, PUT_PASSWORDS_REQUEST, POST_AVATAR_REQUEST } from '../actionTypes/profile'

export const postUsersRequest = payload => ({
  type: POST_USERS_REQUEST,
  payload
})

export const changeUserData = data => ({
  type: CHANGE_USER_DATA,
  data
})

export const changeUserParam = (key, value) => ({
  type: CHANGE_USER_PARAM,
  key,
  value
})

export const changeUserErrors = key => value => ({
  type: CHANGE_USER_ERRORS,
  key,
  value
})

export const toggleUserLoading = key => value => ({
  type: TOGGLE_USER_LOADNIG,
  key,
  value
})

export const getMeRequest = () => ({
  type: GET_ME_REQUEST
})

export const userRestore = () => ({
  type: USER_RESTORE
})

export const putUserRequest = (payload, urlParams) => ({
  type: PUT_USERS_REQUEST,
  payload,
  urlParams
})

export const mergeUserData = data => ({
  type: MERGE_USER_DATA,
  data
})

export const putPasswordsRequest = payload => ({
  type: PUT_PASSWORDS_REQUEST,
  payload
})

export const postAvatarRequest = payload => ({
  type: POST_AVATAR_REQUEST,
  payload
})
