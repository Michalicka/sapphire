
import { changeUserData, changeUserErrors, toggleUserLoading, changeUserParam } from '../actions/user'
import { changeMessagebarParam } from '../actions/messagebar'
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
      response => changeUserData({ id: null, name: '', email: response.email, password: '', passwordConfirmation: '' }),
      () => changeUserParam('registrationSuccess', true),
      () => changeMessagebarParam('variant', 'success'),
      () => changeMessagebarParam('message', 'Registration was successful'),
      () => changeMessagebarParam('open', true)
    ],
    error: errors => changeUserErrors(errors),
    loading: value => toggleUserLoading(value)
  }
)
