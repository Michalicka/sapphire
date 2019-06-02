
import { fetchLoggedEntity } from './utils'
import { users as usersLink } from '../apiLinks'
import { GET_USERS_REQUEST } from '../actionTypes/users'
import { changeUsersErrors, changeUsersData, toggleUsersLoading } from '../actions/users'
import { put } from 'redux-saga/effects'

export const getUsers = fetchLoggedEntity.bind(
  null,
  'get',
  usersLink,
  {
    request: GET_USERS_REQUEST,
    success: [
      () => put(changeUsersErrors({})),
      ({ data }) => put(changeUsersData(data.data))
    ],
    error: errors => changeUsersErrors(errors),
    loading: value => toggleUsersLoading(value)
  }
)
