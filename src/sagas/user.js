
import { changeUserData, changeUserErrors, toggleUserLoading, changeUserParam } from '../actions/user'
import { changeMessagebarParam } from '../actions/messagebar'
import { users as usersLink, me as meLink } from '../apiLinks'
import { USER_REGISTRATION, GET_ME_REQUEST } from '../actionTypes/user'
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
