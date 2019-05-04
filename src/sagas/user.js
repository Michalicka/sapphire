
import { changeUserData, changeUserErrors, toggleUserLoading, changeUserParam } from '../actions/user'
import { changeMessagebarParam } from '../actions/messagebar'
import { users as usersLink } from '../apiLinks'
import { USER_REGISTRATION } from '../actionTypes/user'
import { fetchEntity } from './utils'
import { put } from 'redux-saga/effects'

export const postUsers = fetchEntity.bind(
  null,
  'post',
  usersLink,
  {
    request: USER_REGISTRATION,
    success: [
      response => put(changeUserData({ id: null, name: '', email: '', password: '', passwordConfirmation: '' })),
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
