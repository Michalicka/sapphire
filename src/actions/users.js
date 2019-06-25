
import { GET_USERS_REQUEST, CHANGE_USERS_DATA, CHANGE_USERS_ERRORS, TOGGLE_USERS_LOADING } from '../actionTypes/users'

export const getUsersRequest = name => ({
  type: GET_USERS_REQUEST,
  payload: {
    name
  }
})

export const changeUsersData = data => ({
  type: CHANGE_USERS_DATA,
  data
})

export const changeUsersErrors = key => value => ({
  type: CHANGE_USERS_ERRORS,
  key,
  value
})

export const toggleUsersLoading = key => value => ({
  type: TOGGLE_USERS_LOADING,
  key,
  value
})
