
import { changeUserData, changeUserErrors, toggleUserLoading, changeUserParam, mergeUserData } from '../actions/user'
import { changeModal } from '../actions/modal'
import { changeMessagebarParam } from '../actions/messagebar'
import { users as usersLink, me as meLink, user as userLink, passwords as passwordsLink, avatars as avatarsLink } from '../apiLinks'
import { USER_REGISTRATION, GET_ME_REQUEST, PUT_USERS_REQUEST, PUT_PASSWORDS_REQUEST, POST_AVATAR_REQUEST } from '../actionTypes/user'
import { fetchEntity, fetchLoggedEntity } from './utils'
import { put } from 'redux-saga/effects'

export const postUsers = fetchEntity.bind(
  null,
  'post',
  usersLink,
  {
    request: USER_REGISTRATION,
    success: [
      () => put(changeUserParam('registrationSuccess', true)),
      () => put(changeUserErrors({})),
      () => put(changeMessagebarParam('variant', 'success')),
      () => put(changeMessagebarParam('message', 'Registration was successful')),
      () => put(changeMessagebarParam('open', true))
    ],
    error: errors => changeUserErrors(errors),
    loading: value => toggleUserLoading(value)
  }
)

export const getMe = fetchLoggedEntity.bind(
  null,
  'get',
  meLink,
  {
    request: GET_ME_REQUEST,
    success: [
      response => put(changeUserData({ ...response.data.data }))
    ],
    error: errors => changeUserErrors(errors),
    loading: value => toggleUserLoading(value)
  }
)

export const putUsers = fetchLoggedEntity.bind(
  null,
  'put',
  userLink,
  {
    request: PUT_USERS_REQUEST,
    success: [
      (response, action) => put(mergeUserData(action.payload)),
      () => put(changeModal('editProfile', { show: false })),
      () => put(changeUserErrors({}))
    ],
    error: errors => changeUserErrors(errors),
    loading: value => toggleUserLoading(value)
  }
)

export const putPasswords = fetchLoggedEntity.bind(
  null,
  'put',
  passwordsLink,
  {
    request: PUT_PASSWORDS_REQUEST,
    success: [
      () => put(changeModal('changePassword', { show: false })),
      () => put(changeUserErrors({}))
    ],
    error: errors => changeUserErrors(errors),
    loading: value => toggleUserLoading(value)
  }
)

export const postAvatar = fetchLoggedEntity.bind(
  null,
  'post',
  avatarsLink,
  {
    request: POST_AVATAR_REQUEST,
    success: [
      (response, action) => put(mergeUserData({ avatar: action.payload.photo })),
      () => put(changeModal('changeAvatar', { show: false })),
      () => put(changeUserErrors({}))
    ],
    error: errors => changeUserErrors(errors),
    loading: value => toggleUserLoading(value)
  }
)
