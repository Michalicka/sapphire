
import { USER_REGISTRATION, CHANGE_USER_DATA, CHANGE_USER_PARAM } from '../actionTypes/user'

export function userRegistration() {
  return {
    type: USER_REGISTRATION
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
