
import { GET_USERS_REQUEST, CHANGE_USERS_DATA, CHANGE_USERS_ERRORS, TOGGLE_USERS_LOADING } from '../actionTypes/users'

export function getUsersRequest(name) {
  return {
    type: GET_USERS_REQUEST,
    payload: {
      name
    }
  }
}

export function changeUsersData(data) {
  return {
    type: CHANGE_USERS_DATA,
    data
  }
}

export function changeUsersErrors(errors) {
  return {
    type: CHANGE_USERS_ERRORS,
    errors
  }
}

export function toggleUsersLoading(value) {
  return {
    type: TOGGLE_USERS_LOADING,
    value
  }
}
