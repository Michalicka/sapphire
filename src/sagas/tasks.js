
import { fetchLoggedEntity } from './utils'
import { tasks as tasksLink, task as taskLink } from '../apiLinks'
import { changeTasksData, changeTasksErrors, toggleTasksLoading, addTask, editTask } from '../actions/tasks'
import { GET_TASKS_REQUEST, POST_TASKS_REQUEST, PUT_TASKS_REQUEST } from '../actionTypes/tasks'
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
      () => put(changeModal('editTask', { show: false }))
    ],
    error: putTasksErrors,
    loading: putTasksLoading
  }
)
