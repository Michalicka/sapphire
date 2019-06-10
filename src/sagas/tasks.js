
import { fetchLoggedEntity } from './utils'
import { tasks as tasksLink } from '../apiLinks'
import { changeTasksData, changeTasksErrors, toggleTasksLoading } from '../actions/tasks'
import { GET_TASKS_REQUEST } from '../actionTypes/tasks'
import { put } from 'redux-saga/effects'

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
