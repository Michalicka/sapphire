
import { changeUserData, changeUserErrors, toggleUserLoading } from '../actions/user'
import { users as usersLink } from '../apiLinks'
import { USER_REGISTRATION } from '../actionTypes/user'
import { fetchEntity } from './utils'

export const postUsers = fetchEntity.bind(
  null,
  'post',
  usersLink,
  {
    request: USER_REGISTRATION,
    success: [
      response => changeUserData({ id: null, name: '', email: response.email, password: '', passwordConfirmation: '' })
    ],
    error: errors => changeUserErrors(errors),
    loading: value => toggleUserLoading(value)
  }
)
