
import { CHANGE_MESSAGEBAR_PARAM } from '../actionTypes/messagebar'

const initialState = {
  open: false,
  message: '',
  variant: 'info'
}

export default function messagebar(state = initialState, action) {
  switch (action.type) {
    case CHANGE_MESSAGEBAR_PARAM:
      return { ...state, [action.key]: action.value }
    default:
      return state
  }
}
