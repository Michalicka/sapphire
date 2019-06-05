
import { CHANGE_TASKS_DATA, EDIT_TASK, TOGGLE_TASKS_LOADING, CHANGE_TASKS_ERRORS } from '../actionTypes/tasks'

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

export function toggleTasksLoading(key, value) {
  return {
    type: TOGGLE_TASKS_LOADING,
    key,
    value
  }
}

export function changeTasksErrors(key, value) {
  return {
    type: CHANGE_TASKS_ERRORS,
    key,
    value
  }
}
