
import { getTasks } from './tasks'
import { GET_TASKS_REQUEST } from '../actionTypes/tasks'
import { take, put, call } from 'redux-saga/effects'
import { tasks as tasksLink } from '../apiLinks'
import { headers, formatErrors } from './utils'
import { changeTasksData, changeTasksErrors, toggleTasksLoading } from '../actions/tasks'
import axios from 'axios'
import { putTokensRequest } from '../actions/tokens'

describe('tasks saga', () => {
  describe('getTasks', () => {
    let gen
    const urlParams = { id: 1 }
    const fakeAction = {
      type: GET_TASKS_REQUEST,
      urlParams
    }
    const apiCall = call(axios.get, tasksLink(urlParams), { headers: headers() })
    const getTasksKey = 'getTasks'
    const getTasksErrors = changeTasksErrors(getTasksKey)
    const getTasksLoading = toggleTasksLoading(getTasksKey)

    beforeEach(() => {
      gen = getTasks()
    })

    it('should return getTasks success flow', () => {
      const response = {
        data: {
          data: [
            {
              id: 1,
              title: 'Task'
            }
          ]
        }
      }

      expect(gen.next().value).toEqual(take(GET_TASKS_REQUEST))
      expect(gen.next(fakeAction).value).toEqual(put(getTasksLoading(true)))
      expect(gen.next().value).toEqual(apiCall)
      expect(gen.next(response).value).toEqual(put(changeTasksData(response.data.data)))
      expect(gen.next().value).toEqual(put(getTasksErrors({})))
      expect(gen.next().value).toEqual(put(getTasksLoading(false)))
      expect(gen.next().value).toEqual(take(GET_TASKS_REQUEST))
    })

    it('should return getTasks validation error flow', () => {
      const error = {
        response: {
          status: 422,
          data: {
            errors: {
              name: 'error'
            }
          }
        }
      }
      expect(gen.next().value).toEqual(take(GET_TASKS_REQUEST))
      expect(gen.next(fakeAction).value).toEqual(put(getTasksLoading(true)))
      expect(gen.next().value).toEqual(apiCall)
      expect(gen.throw(error).value).toEqual(put(getTasksErrors(formatErrors(error.response.data.errors))))
      expect(gen.next().value).toEqual(put(getTasksLoading(false)))
      expect(gen.next().value).toEqual(take(GET_TASKS_REQUEST))
    })

    it('should return getTasks authentication error flow', () => {
      const error = {
        response: {
          status: 401
        }
      }
      expect(gen.next().value).toEqual(take(GET_TASKS_REQUEST))
      expect(gen.next(fakeAction).value).toEqual(put(getTasksLoading(true)))
      expect(gen.next().value).toEqual(apiCall)
      expect(gen.throw(error).value).toEqual(put(putTokensRequest(fakeAction)))
      expect(gen.next().value).toEqual(put(getTasksLoading(false)))
      expect(gen.next().value).toEqual(take(GET_TASKS_REQUEST))
    })
  })
})
