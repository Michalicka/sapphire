
import { USER_REGISTRATION, CHANGE_USER_DATA, CHANGE_USER_PARAM, CHANGE_USER_ERRORS, TOGGLE_USER_LOADNIG, GET_ME_REQUEST, USER_RESTORE, PUT_USERS_REQUEST, MERGE_USER_DATA } from '../actionTypes/user'

export function userRegistration(payload) {
  return {
    type: USER_REGISTRATION,
    payload
  }
}

export function changeUserData(data) {
  return {
    type: CHANGE_USER_DATA,
    data
  }
}

export function changeUserParam(key, value) {
  return {
    type: CHANGE_USER_PARAM,
    key,
    value
  }
}

export function changeUserErrors(errors) {
  return {
    type: CHANGE_USER_ERRORS,
    errors
  }
}

export function toggleUserLoading(value) {
  return {
    type: TOGGLE_USER_LOADNIG,
    value
  }
}

export function getMeRequest() {
  return {
    type: GET_ME_REQUEST
  }
}

export function userRestore() {
  return {
    type: USER_RESTORE
  }
}

export function putUserRequest(payload, urlParams) {
  return {
    type: PUT_USERS_REQUEST,
    payload,
    urlParams
  }
}

export function mergeUserData(data) {
  return {
    type: MERGE_USER_DATA,
    data
  }
}
