
import { CHANGE_MODAL } from '../actionTypes/modal'

export default function modal(state = '', action) {
  switch (action.type) {
    case CHANGE_MODAL:
      return action.value
    default:
      return state
  }
}
