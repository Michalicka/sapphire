
import { CHANGE_MODAL } from '../actionTypes/modal'

export function changeModal(key, data) {
  return {
    type: CHANGE_MODAL,
    key,
    data
  }
}
