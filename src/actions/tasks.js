
import { CHANGE_TASKS_DATA, EDIT_TASK, TOGGLE_TASKS_LOADING, CHANGE_TASKS_ERRORS, GET_TASKS_REQUEST } from '../actionTypes/tasks'

export function changeTasksData(data) {
  return {
    type: CHANGE_TASKS_DATA,
    data
  }
}

export function editTask(id, data) {
  return {
    type: EDIT_TASK,
    id,
    data
  }
}

export const toggleTasksLoading = key => value => ({
  type: TOGGLE_TASKS_LOADING,
  key,
  value
})

export const changeTasksErrors = key => value => {
  return {
    type: CHANGE_TASKS_ERRORS,
    key,
    value
  }
}

export function getTasksRequest(urlParams) {
  return {
    type: GET_TASKS_REQUEST,
    urlParams
  }
}
