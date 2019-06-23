
import { fetchLoggedEntity } from './utils'
import { tasks as tasksLink, task as taskLink, taskDetail as taskDetailLink } from '../apiLinks'
import { changeTasksData, changeTasksErrors, toggleTasksLoading, addTask, editTask, getTasksRequest, deleteTask } from '../actions/tasks'
import { GET_TASKS_REQUEST, POST_TASKS_REQUEST, PUT_TASKS_REQUEST, DELETE_TASKS_REQUEST, GET_TASKS_DETAIL_REQUEST } from '../actionTypes/tasks'
import { put } from 'redux-saga/effects'
import { changeModal } from '../actions/modal'

const getTasksKey = 'getTasks'
const getTasksErrors = changeTasksErrors(getTasksKey)
const getTasksLoading = toggleTasksLoading(getTasksKey)

export const getTasks = fetchLoggedEntity.bind(
  null,
  'get',
  tasksLink,
  {
    request: GET_TASKS_REQUEST,
    success: [
      response => put(changeTasksData(response.data.data)),
      () => put(getTasksErrors({}))
    ],
    error: getTasksErrors,
    loading: getTasksLoading
  }
)

const postTasksKey = 'postTasks'
const postTasksErrors = changeTasksErrors(postTasksKey)
const postTasksLoading = toggleTasksLoading(postTasksKey)

export const postTasks = fetchLoggedEntity.bind(
  null,
  'post',
  tasksLink,
  {
    request: POST_TASKS_REQUEST,
    success: [
      response => put(addTask(response.data.data)),
      () => put(postTasksErrors({})),
      () => put(changeModal('createTask', { show: false }))
    ],
    error: postTasksErrors,
    loading: postTasksLoading
  }
)

const putTasksKey = 'putTasks'
const putTasksErrors = changeTasksErrors(putTasksKey)
const putTasksLoading = toggleTasksLoading(putTasksKey)

export const putTasks = fetchLoggedEntity.bind(
  null,
  'put',
  taskLink,
  {
    request: PUT_TASKS_REQUEST,
    success: [
      (response, action) => put(editTask(action.urlParams.taskId, action.payload)),
      () => put(putTasksErrors({})),
      () => put(changeModal('editTask', { show: false })),
      (response, { urlParams }) => put(getTasksRequest({ id: urlParams.id }))
    ],
    error: putTasksErrors,
    loading: putTasksLoading
  }
)

const deleteTasksKey = 'deleteTasks'
const deleteTasksErrors = changeTasksErrors(deleteTasksKey)
const deleteTasksLoading = toggleTasksLoading(deleteTasksKey)

export const deleteTasks = fetchLoggedEntity.bind(
  null,
  'delete',
  taskLink,
  {
    request: DELETE_TASKS_REQUEST,
    success: [
      (response, action) => put(deleteTask(action.urlParams.taskId)),
      () => put(deleteTasksErrors({})),
      (response, { urlParams }) => put(deleteTask(urlParams.id))
    ],
    error: deleteTasksErrors,
    loading: deleteTasksLoading
  }
)

const getTasksDetailKey = 'getTasksDetail'
const getTasksDetailErrors = changeTasksErrors(getTasksDetailKey)
const getTasksDetailLoading = toggleTasksLoading(getTasksDetailKey)

export const getTasksDetail = fetchLoggedEntity.bind(
  null,
  'get',
  taskDetailLink,
  {
    request: GET_TASKS_DETAIL_REQUEST,
    success: [
      ({ data }, { urlParams }) => put(editTask(urlParams.id, data.data)),
      () => (getTasksDetailErrors({}))
    ],
    error: getTasksDetailErrors,
    loading: getTasksDetailLoading
  }
)
