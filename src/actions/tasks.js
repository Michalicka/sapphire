
import { CHANGE_TASKS_DATA, EDIT_TASK, TOGGLE_TASKS_LOADING, CHANGE_TASKS_ERRORS, GET_TASKS_REQUEST, POST_TASKS_REQUEST, ADD_TASK, PUT_TASKS_REQUEST, DELETE_TASKS_REQUEST, GET_TASKS_DETAIL_REQUEST } from '../actionTypes/tasks'

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

export function postTasksRequest(urlParams, payload) {
  return {
    type: POST_TASKS_REQUEST,
    urlParams,
    payload
  }
}

export function addTask(item) {
  return {
    type: ADD_TASK,
    item
  }
}

export function putTasksRequest(urlParams, payload) {
  return {
    type: PUT_TASKS_REQUEST,
    urlParams,
    payload
  }
}

export function deleteTasksRequest(urlParams) {
  return {
    type: DELETE_TASKS_REQUEST,
    urlParams
  }
}

export function deleteTask(id) {
  return {
    type: DELETE_TASKS_REQUEST,
    id
  }
}

export function getTasksDetailRequest(urlParams) {
  return {
    type: GET_TASKS_DETAIL_REQUEST,
    urlParams
  }
}
