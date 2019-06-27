
import { CHANGE_USER_DATA, CHANGE_USER_PARAM, CHANGE_USER_ERRORS, TOGGLE_USER_LOADNIG, USER_RESTORE, MERGE_USER_DATA } from '../actionTypes/profile'
import { getDefaultValues, changeData, changeDataParam, changeErrorsParam, changeLoadingParam, mergeData } from './utils'

const profileDefault = getDefaultValues(['getMe', 'postUsers', 'putUsers', 'postAvatars', 'putPasswords'])

const initialState = {
  data: {
    id: null,
    name: '',
    email: '',
    avatar: ''
  },
  errors: profileDefault({}),
  loading: profileDefault(false)
}

function user(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USER_DATA:
      return changeData(state, action)
    case CHANGE_USER_PARAM:
      return changeDataParam(state, action)
    case CHANGE_USER_ERRORS:
      return changeErrorsParam(state, action)
    case TOGGLE_USER_LOADNIG:
      return changeLoadingParam(state, action)
    case USER_RESTORE:
      return { ...initialState }
    case MERGE_USER_DATA:
      return mergeData(state, action)
    default:
      return state
  }
}

export default user
