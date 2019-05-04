
import { CHANGE_MESSAGEBAR_PARAM } from '../actionTypes/messagebar'

const initialState = {
  open: false,
  message: '',
  variant: 'info'
}

export default function messagebar(state = initialState, action) {
  switch (action.type) {
    case CHANGE_MESSAGEBAR_PARAM:
      const newState = { ...state, [action.key]: action.value }
      return newState
    default:
      return state
  }
}
