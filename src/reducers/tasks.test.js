
import { getDefaultValues } from './utils'
import { changeTasksData, editTask, changeTasksErrors, toggleTasksLoading } from '../actions/tasks'
import tasks from './tasks'

describe('tasks reducer', () => {
  const getTasksValues = getDefaultValues(['getTasks', 'putTasks', 'postTasks', 'putTasksMembers'])
  const initialState = {
    data: [],
    loading: getTasksValues({ show: false }),
    errors: getTasksValues({})
  }
  it('should return expected initialState', () => {
    expect(tasks(undefined, {})).toEqual(initialState)
  })

  it('should return expected state after changeTasksData action', () => {
    const data = [
      {
        id: 1,
        name: 'task'
      }
    ]
    const expectedState = { ...initialState, data }

    expect(tasks(undefined, changeTasksData(data))).toEqual(expectedState)
  })

  it('shoudl return expected state after editTask action', () => {
    const data = [
      {
        id: 1,
        name: 'task'
      }
    ]
    const newState = { ...initialState, data }
    const expectedState = { ...initialState, data: [{ id: 1, name: 'task2' }] }

    expect(tasks(newState, editTask(1, { name: 'task2' }))).toEqual(expectedState)
  })

  it('should return expected state after changeErrors action', () => {
    const error = { name: 'error' }
    const errors = { ...initialState.errors, getTasks: error }
    const expectedState = { ...initialState, errors }

    expect(tasks(undefined, changeTasksErrors('getTasks')(error))).toEqual(expectedState)
  })

  it('should return expected state after toggleLoading action', () => {
    const value = { show: false }
    const loading = { ...initialState.loading, getTasks: value }
    const expectedState = { ...initialState, loading }

    expect(tasks(undefined, toggleTasksLoading('getTasks')(value))).toEqual(expectedState)
  })
})
