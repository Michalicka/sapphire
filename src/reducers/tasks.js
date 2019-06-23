
import { CHANGE_TASKS_DATA, EDIT_TASK, CHANGE_TASKS_ERRORS, TOGGLE_TASKS_LOADING, ADD_TASK, DELETE_TASK, ADD_TASK_COMMENT } from '../actionTypes/tasks'
import { getDefaultValues, editItem, changeErrorsParam, changeLoadingParam, addItem, deleteItem, findItemIndex } from './utils'

const tasksDefault = getDefaultValues(['getTasks', 'putTasks', 'postTasks', 'putTasksMembers', 'getTasksDetail', 'getTasksComments', 'postTasksComments'])

const initialState = {
  data: [],
  loading: tasksDefault(false),
  errors: tasksDefault({})
}

export default function tasks(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TASKS_DATA:
      return { ...state, data: [...action.data] }
    case ADD_TASK:
      return addItem(state, action)
    case EDIT_TASK:
      return editItem(state, action)
    case DELETE_TASK:
      return deleteItem(state, action)
    case CHANGE_TASKS_ERRORS:
      return changeErrorsParam(state, action)
    case TOGGLE_TASKS_LOADING:
      return changeLoadingParam(state, action)
    case ADD_TASK_COMMENT: {
      const taskIndex = findItemIndex(state.data, action.id)
      const task = { ...state.data[taskIndex] }
      const comments = [...task.comments, action.comment]
      const data = [...state.data]
      data.splice(taskIndex, 1, { ...task, comments })
      return { ...state, data }
    }
    default:
      return state
  }
}
