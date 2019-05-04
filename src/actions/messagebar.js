
import { CHANGE_MESSAGEBAR_PARAM } from '../actionTypes/messagebar'

export function changeMessagebarParam(key, value) {
  return {
    type: CHANGE_MESSAGEBAR_PARAM,
    key,
    value
  }
}
