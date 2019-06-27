
import { CHANGE_PROJECTS_DATA, CHANGE_PROJECTS_ERRORS, TOGGLE_PROJECTS_LOADING, PUSH_PROJECT, EDIT_PROJECT, REMOVE_PROJECT } from '../actionTypes/projects'
import { getDefaultValues, changeData, changeErrorsParam, changeLoadingParam, addItem, editItem, deleteItem } from './utils'

const projectDefault = getDefaultValues(['getProjects', 'postProjects', 'putProjects', 'deleteProjects', 'getProjectsMembers', 'putProjectsMembers'])

const initialState = {
  data: [],
  errors: projectDefault({}),
  loading: projectDefault(false)
}

function projects(state = initialState, action) {
  switch (action.type) {
    case CHANGE_PROJECTS_DATA: {
      return changeData(state, action)
    }
    case CHANGE_PROJECTS_ERRORS: {
      return changeErrorsParam(state, action)
    }
    case TOGGLE_PROJECTS_LOADING: {
      return changeLoadingParam(state, action)
    }
    case PUSH_PROJECT: {
      return addItem(state, action)
    }
    case EDIT_PROJECT: {
      return editItem(state, action)
    }
    case REMOVE_PROJECT: {
      return deleteItem(state, action)
    }
    default: {
      return state
    }
  }
}

export default projects
