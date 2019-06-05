
import { CHANGE_TASKS_DATA, EDIT_TASK, CHANGE_TASKS_ERRORS, TOGGLE_TASKS_LOADING } from '../actionTypes/tasks'
import { getDefaultValues, editItem, editErrorsParam, editLoadingParam } from './utils'

const tasksDefault = getDefaultValues(['getTasks', 'putTasks', 'postTasks', 'putTasksMembers'])

const initialState = {
  data: [],
  loading: tasksDefault({ show: false }),
  errors: tasksDefault({})
}

export default function tasks(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TASKS_DATA:
      return { ...state, data: [...action.data] }
    case EDIT_TASK:
      return editItem(state, action)
    case CHANGE_TASKS_ERRORS:
      return editErrorsParam(state, action)
    case TOGGLE_TASKS_LOADING:
      return editLoadingParam(state, action)
    default:
      return state
  }
}
