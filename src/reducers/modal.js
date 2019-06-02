
import { CHANGE_MODAL } from '../actionTypes/modal'

const initialState = {
  createProject: {
    show: false
  },
  editProfile: {
    show: false
  },
  editProject: {
    show: false
  },
  changeAvatar: {
    show: false
  },
  changePassword: {
    show: false
  },
  editProjectMembers: {
    show: false
  }
}

export default function modal(state = initialState, action) {
  switch (action.type) {
    case CHANGE_MODAL:
      return { ...state, [action.key]: action.data || { show: false } }
    default:
      return state
  }
}
