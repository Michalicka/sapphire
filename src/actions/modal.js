
import { CHANGE_MODAL } from '../actionTypes/modal'

export function changeModal(value) {
  return {
    type: CHANGE_MODAL,
    value
  }
}
