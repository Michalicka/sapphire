
import { CHANGE_PROJECTS_DATA, CHANGE_PROJECTS_ERRORS, TOGGLE_PROJECTS_LOADING, PUSH_PROJECT, EDIT_PROJECT, REMOVE_PROJECT } from '../actionTypes/projects'

const initialState = {
  data: [],
  errors: {},
  loading: false
}

function projects(state = initialState, action) {
  switch (action.type) {
    case CHANGE_PROJECTS_DATA: {
      return { ...state, data: action.data }
    }
    case CHANGE_PROJECTS_ERRORS: {
      return { ...state, errors: action.errors }
    }
    case TOGGLE_PROJECTS_LOADING: {
      return { ...state, loading: action.value }
    }
    case PUSH_PROJECT: {
      const data = [...state.data, action.project]
      return { ...state, data }
    }
    case EDIT_PROJECT: {
      const projectIndex = state.data.findIndex(item => item.id === action.id)
      const project = { ...state.data[projectIndex], ...action.data }
      const data = [...state.data]
      data.splice(projectIndex, 1, project)
      return { ...state, data }
    }
    case REMOVE_PROJECT: {
      const data = state.data.filter(item => item.id !== action.id)
      return { ...state, data }
    }
    default: {
      return state
    }
  }
}

export default projects
