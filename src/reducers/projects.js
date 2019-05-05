
import { CHANGE_PROJECTS_DATA, CHANGE_PROJECTS_ERRORS, TOGGLE_PROJECTS_LOADING } from '../actionTypes/projects'

const initialState = {
  data: [],
  errors: {},
  loading: false
}

function projects(state = initialState, action) {
  switch (action.type) {
    case CHANGE_PROJECTS_DATA:
      return { ...state, data: action.data }
    case CHANGE_PROJECTS_ERRORS:
      return { ...state, errors: action.errors }
    case TOGGLE_PROJECTS_LOADING:
      return { ...state, loading: action.value }
    default:
      return state
  }
}

export default projects
