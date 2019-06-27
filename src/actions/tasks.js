
import { CHANGE_TASKS_DATA, EDIT_TASK, TOGGLE_TASKS_LOADING, CHANGE_TASKS_ERRORS, GET_TASKS_REQUEST, POST_TASKS_REQUEST, ADD_TASK, PUT_TASKS_REQUEST, DELETE_TASKS_REQUEST, GET_TASKS_DETAIL_REQUEST, GET_TASKS_COMMENTS_REQUEST, POST_TASKS_COMMENTS_REQUEST, ADD_TASK_COMMENT } from '../actionTypes/tasks'

export const changeTasksData = data => ({
  type: CHANGE_TASKS_DATA,
  data
})

export const editTask = (id, data) => ({
  type: EDIT_TASK,
  id,
  data
})

export const toggleTasksLoading = key => value => ({
  type: TOGGLE_TASKS_LOADING,
  key,
  value
})

export const changeTasksErrors = key => value => ({
  type: CHANGE_TASKS_ERRORS,
  key,
  value
})

export const getTasksRequest = urlParams => ({
  type: GET_TASKS_REQUEST,
  urlParams
})

export const postTasksRequest = (urlParams, payload) => ({
  type: POST_TASKS_REQUEST,
  urlParams,
  payload
})

export const addTask = item => ({
  type: ADD_TASK,
  item
})

export const putTasksRequest = (urlParams, payload) => ({
  type: PUT_TASKS_REQUEST,
  urlParams,
  payload
})

export const deleteTasksRequest = urlParams => ({
  type: DELETE_TASKS_REQUEST,
  urlParams
})

export const deleteTask = id => ({
  type: DELETE_TASKS_REQUEST,
  id
})

export const getTasksDetailRequest = urlParams => ({
  type: GET_TASKS_DETAIL_REQUEST,
  urlParams
})

export const getTasksCommentsRequest = urlParams => ({
  type: GET_TASKS_COMMENTS_REQUEST,
  urlParams
})

export const postTasksCommentsRequest = (urlParams, payload) => ({
  type: POST_TASKS_COMMENTS_REQUEST,
  urlParams,
  payload
})

export const addTaskComment = (key, value) => ({
  type: ADD_TASK_COMMENT,
  key,
  value
})
