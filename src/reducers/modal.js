
import { CHANGE_MODAL } from '../actionTypes/modal'
import { getDefaultValues } from './utils'

const keys = [
  'createProject',
  'editProfile',
  'editProject',
  'changeAvatar',
  'changePassword',
  'changePassword',
  'editProjectMembers',
  'createTask',
  'editTask',
  'chat'
]

const initialState = getDefaultValues(keys)({ show: false })

export default function modal(state = initialState, action) {
  switch (action.type) {
    case CHANGE_MODAL:
      return { ...state, [action.key]: action.data || { show: false } }
    default:
      return state
  }
}
