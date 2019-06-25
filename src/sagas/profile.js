
import { changeUserData, changeUserErrors, toggleUserLoading, changeUserParam, mergeUserData } from '../actions/profile'
import { changeModal } from '../actions/modal'
import { changeMessagebarParam } from '../actions/messagebar'
import { users as usersLink, me as meLink, user as userLink, passwords as passwordsLink, avatars as avatarsLink } from '../apiLinks'
import { POST_USERS_REQUEST, GET_ME_REQUEST, PUT_USERS_REQUEST, PUT_PASSWORDS_REQUEST, POST_AVATAR_REQUEST } from '../actionTypes/profile'
import { fetchEntity, fetchLoggedEntity } from './utils'
import { put } from 'redux-saga/effects'

const postUsersKey = 'postUsers'
const postUsersErrors = changeUserErrors(postUsersKey)
const postUsersLoading = toggleUserLoading(postUsersKey)

export const postUsers = fetchEntity.bind(
  null,
  'post',
  usersLink,
  {
    request: POST_USERS_REQUEST,
    success: [
      () => put(changeUserParam('registrationSuccess', true)),
      () => put(postUsersErrors({})),
      () => put(changeMessagebarParam('variant', 'success')),
      () => put(changeMessagebarParam('message', 'Registration was successful')),
      () => put(changeMessagebarParam('open', true))
    ],
    error: postUsersErrors,
    loading: postUsersLoading
  }
)

const getMeKey = 'getMe'
const getMeErrors = changeUserErrors(getMeKey)
const getMeLoading = toggleUserLoading(getMeKey)

export const getMe = fetchLoggedEntity.bind(
  null,
  'get',
  meLink,
  {
    request: GET_ME_REQUEST,
    success: [
      response => put(changeUserData({ ...response.data.data }))
    ],
    error: getMeErrors,
    loading: getMeLoading
  }
)

const putUsersKey = 'putUsers'
const putUsersErrors = changeUserErrors(putUsersKey)
const putUsersLoading = toggleUserLoading(putUsersKey)

export const putUsers = fetchLoggedEntity.bind(
  null,
  'put',
  userLink,
  {
    request: PUT_USERS_REQUEST,
    success: [
      (response, action) => put(mergeUserData(action.payload)),
      () => put(changeModal('editProfile', { show: false })),
      () => put(putUsersErrors({}))
    ],
    error: putUsersErrors,
    loading: putUsersLoading
  }
)

const putPasswordsKey = 'putPasswords'
const putPasswordsErrors = changeUserErrors(putPasswordsKey)
const putPasswordsLoading = toggleUserLoading(putPasswordsKey)

export const putPasswords = fetchLoggedEntity.bind(
  null,
  'put',
  passwordsLink,
  {
    request: PUT_PASSWORDS_REQUEST,
    success: [
      () => put(changeModal('changePassword', { show: false })),
      () => put(putPasswordsErrors({}))
    ],
    error: putPasswordsErrors,
    loading: putPasswordsLoading
  }
)

const postAvatarKey = 'postAvatar'
const postAvatarErrors = changeUserErrors(postAvatarKey)
const postAvatarLoading = toggleUserLoading(postAvatarKey)

export const postAvatar = fetchLoggedEntity.bind(
  null,
  'post',
  avatarsLink,
  {
    request: POST_AVATAR_REQUEST,
    success: [
      (response, action) => put(mergeUserData({ avatar: action.payload.photo })),
      () => put(changeModal('changeAvatar', { show: false })),
      () => put(postAvatarErrors({}))
    ],
    error: postAvatarErrors,
    loading: postAvatarLoading
  }
)
