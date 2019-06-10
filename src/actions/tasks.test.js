import { CHANGE_TASKS_DATA, EDIT_TASK, TOGGLE_TASKS_LOADING, CHANGE_TASKS_ERRORS, GET_TASKS_REQUEST } from '../actionTypes/tasks'
import { changeTasksData, editTask, toggleTasksLoading, changeTasksErrors, getTasksRequest } from './tasks'

describe('tasks actions', () => {
  it('changeTasksData', () => {
    const data = [
      {
        id: 1,
        taks: 'task',
        description: 'description'
      }
    ]
    const expectedValue = {
      type: CHANGE_TASKS_DATA,
      data
    }

    expect(changeTasksData(data)).toEqual(expectedValue)
  })

  it('editTask', () => {
    const id = 1
    const data = {
      name: 'task2'
    }
    const expectedValue = {
      type: EDIT_TASK,
      id,
      data
    }

    expect(editTask(id, data)).toEqual(expectedValue)
  })

  it('toggleTasksLoading', () => {
    const key = 'getTasks'
    const value = { show: true }
    const expectedValue = {
      type: TOGGLE_TASKS_LOADING,
      key,
      value
    }

    expect(toggleTasksLoading(key, value)).toEqual(expectedValue)
  })

  it('changeTasksErrors', () => {
    const key = 'getTasks'
    const value = {}
    const expectedValue = {
      type: CHANGE_TASKS_ERRORS,
      key,
      value
    }

    expect(changeTasksErrors(key, value)).toEqual(expectedValue)
  })

  it('getTasksRequest', () => {
    const urlParams = {
      id: 1
    }
    const expectedValue = {
      type: GET_TASKS_REQUEST,
      urlParams
    }

    expect(getTasksRequest(urlParams)).toEqual(expectedValue)
  })
})
