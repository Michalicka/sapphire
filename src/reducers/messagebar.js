
import { CHANGE_MESSAGEBAR_DATA } from '../actionTypes/messagebar'

const initialState = {
  open: false,
  message: '',
  variant: 'info'
}

export default function messagebar(state = initialState, action) {
  switch (action.type) {
    case CHANGE_MESSAGEBAR_DATA:
      return { ...action.payload }
    default:
      return state
  }
}
