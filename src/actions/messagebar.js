
import { CHANGE_MESSAGEBAR_DATA } from '../actionTypes/messagebar'

export function changeMessagebarData(payload) {
  return {
    type: CHANGE_MESSAGEBAR_DATA,
    payload
  }
}
