
import { fetchLoggedEntity } from './utils'
import { users as usersLink } from '../apiLinks'
import { GET_USERS_REQUEST } from '../actionTypes/users'
import { changeUsersErrors, changeUsersData, toggleUsersLoading } from '../actions/users'
import { put } from 'redux-saga/effects'

const getUsersKey = 'getUsers'
const getUsersErrors = changeUsersErrors(getUsersKey)
const getUsersLoading = toggleUsersLoading(getUsersKey)

export const getUsers = fetchLoggedEntity.bind(
  null,
  'get',
  usersLink,
  {
    request: GET_USERS_REQUEST,
    success: [
      () => put(getUsersErrors({})),
      ({ data }) => put(changeUsersData(data.data))
    ],
    error: getUsersErrors,
    loading: getUsersLoading
  }
)
