
import { getProjects, postProjects, putProjects } from './projects'
import { put, take, call } from 'redux-saga/effects'
import { changeProjectsData, changeProjectsErrors, toggleProjectsLoading, postProjectRequest, pushProject, putProjectsRequest, editProject } from '../actions/projects'
import { changeModal } from '../actions/modal'
import { putTokensRequest } from '../actions/tokens'
import { projects as projectsLink, project as projectLink } from '../apiLinks'
import { GET_PROJECTS_REQUEST, POST_PROJECTS_REQUEST, PUT_PROJECTS_REQUEST } from '../actionTypes/projects'
import { headers, formatErrors } from './utils'
import axios from 'axios'

describe('projects saga', () => {
  describe('getProjects', () => {
    let gen
    const apiCall = call(axios.get, projectsLink, { headers: headers() })
    const fakeAction = {
      type: GET_PROJECTS_REQUEST
    }

    beforeEach(() => {
      gen = getProjects()
    })

    it('should return getProjects success flow', () => {
      const response = {
        data: {
          data: {
            name: 'Project',
            description: 'description'
          }
        }
      }

      expect(gen.next().value).toEqual(take(GET_PROJECTS_REQUEST))
      expect(gen.next(fakeAction).value).toEqual(put(toggleProjectsLoading(true)))
      expect(gen.next().value).toEqual(apiCall)
      expect(gen.next(response).value).toEqual(put(changeProjectsData(response.data.data)))
      expect(gen.next().value).toEqual(put(toggleProjectsLoading(false)))
    })

    it('should return getProjects validation error flow', () => {
      const errorBody = {
        response: {
          status: 422,
          data: {
            errors: {
              name: ['error']
            }
          }
        }
      }

      expect(gen.next().value).toEqual(take(GET_PROJECTS_REQUEST))
      expect(gen.next(fakeAction).value).toEqual(put(toggleProjectsLoading(true)))
      expect(gen.next().value).toEqual(apiCall)
      expect(gen.throw(errorBody).value).toEqual(put(changeProjectsErrors(formatErrors(errorBody.response.data.errors))))
      expect(gen.next().value).toEqual(put(toggleProjectsLoading(false)))
    })

    it('should return getProjects authentication error flow', () => {
      const errorBody = {
        response: {
          status: 401
        }
      }

      expect(gen.next().value).toEqual(take(GET_PROJECTS_REQUEST))
      expect(gen.next(fakeAction).value).toEqual(put(toggleProjectsLoading(true)))
      expect(gen.next().value).toEqual(apiCall)
      expect(gen.throw(errorBody).value).toEqual(put(putTokensRequest(fakeAction)))
      expect(gen.next().value).toEqual(put(toggleProjectsLoading(false)))
      expect(gen.next().value).toEqual(take(GET_PROJECTS_REQUEST))
    })
  })

  describe('postProjects', () => {
    let gen
    const actionData = {
      name: 'project',
      description: 'description'
    }
    const fakeAction = postProjectRequest(actionData)
    const apiCall = call(axios.post, projectsLink, fakeAction.payload, { headers: headers() })

    beforeEach(() => {
      gen = postProjects()
    })

    it('shloud return postProjects success flow', () => {
      const response = {
        data: {
          data: {
            id: 1,
            ...actionData
          }
        }
      }

      expect(gen.next().value).toEqual(take(POST_PROJECTS_REQUEST))
      expect(gen.next(fakeAction).value).toEqual(put(toggleProjectsLoading(true)))
      expect(gen.next().value).toEqual(apiCall)
      expect(gen.next(response).value).toEqual(put(changeProjectsErrors({})))
      expect(gen.next(response).value).toEqual(put(pushProject(response.data.data)))
      expect(gen.next(response).value).toEqual(put(changeModal('')))
      expect(gen.next(fakeAction).value).toEqual(put(toggleProjectsLoading(false)))
      expect(gen.next().value).toEqual(take(POST_PROJECTS_REQUEST))
    })

    it('shloud return postProjects error flow', () => {
      const errors = {
        name: ['error'],
        description: ['error']
      }
      const errorBody = {
        response: {
          status: 422,
          data: {
            errors
          }
        }
      }

      expect(gen.next().value).toEqual(take(POST_PROJECTS_REQUEST))
      expect(gen.next(fakeAction).value).toEqual(put(toggleProjectsLoading(true)))
      expect(gen.next().value).toEqual(apiCall)
      expect(gen.throw(errorBody).value).toEqual(put(changeProjectsErrors(formatErrors(errors))))
      expect(gen.next(fakeAction).value).toEqual(put(toggleProjectsLoading(false)))
      expect(gen.next().value).toEqual(take(POST_PROJECTS_REQUEST))
    })

    it('should return postProjects authentication error flow', () => {
      const errorBody = {
        response: {
          status: 401
        }
      }

      expect(gen.next().value).toEqual(take(POST_PROJECTS_REQUEST))
      expect(gen.next(fakeAction).value).toEqual(put(toggleProjectsLoading(true)))
      expect(gen.next().value).toEqual(apiCall)
      expect(gen.throw(errorBody).value).toEqual(put(putTokensRequest(fakeAction)))
      expect(gen.next().value).toEqual(put(toggleProjectsLoading(false)))
      expect(gen.next().value).toEqual(take(POST_PROJECTS_REQUEST))
    })
  })

  describe('putProjects', () => {
    let gen
    const payload = {
      name: 'project',
      description: 'description'
    }
    const urlParams = {
      id: 1
    }
    const fakeAction = putProjectsRequest(payload, urlParams)
    const apiCall = call(axios.put, projectLink(fakeAction.urlParams), fakeAction.payload, { headers: headers() })

    beforeEach(() => {
      gen = putProjects()
    })

    it('shloud return putProjects success flow', () => {
      const response = {
        data: {
          data: {}
        }
      }

      expect(gen.next().value).toEqual(take(PUT_PROJECTS_REQUEST))
      expect(gen.next(fakeAction).value).toEqual(put(toggleProjectsLoading(true)))
      expect(gen.next().value).toEqual(apiCall)
      expect(gen.next(response).value).toEqual(put(changeProjectsErrors({})))
      expect(gen.next().value).toEqual(put(editProject(fakeAction.id, fakeAction.payload)))
      expect(gen.next().value).toEqual(put(changeModal('')))
      expect(gen.next().value).toEqual(put(toggleProjectsLoading(false)))
      expect(gen.next().value).toEqual(take(PUT_PROJECTS_REQUEST))
    })

    it('shloud return putProjects error flow', () => {
      const errors = {
        name: ['error'],
        description: ['error']
      }
      const errorBody = {
        response: {
          status: 422,
          data: {
            errors
          }
        }
      }

      expect(gen.next().value).toEqual(take(PUT_PROJECTS_REQUEST))
      expect(gen.next(fakeAction).value).toEqual(put(toggleProjectsLoading(true)))
      expect(gen.next().value).toEqual(apiCall)
      expect(gen.throw(errorBody).value).toEqual(put(changeProjectsErrors(formatErrors(errors))))
      expect(gen.next().value).toEqual(put(toggleProjectsLoading(false)))
      expect(gen.next().value).toEqual(take(PUT_PROJECTS_REQUEST))
    })

    it('should return putProjects authentication error flow', () => {
      const errorBody = {
        response: {
          status: 401
        }
      }

      expect(gen.next().value).toEqual(take(PUT_PROJECTS_REQUEST))
      expect(gen.next(fakeAction).value).toEqual(put(toggleProjectsLoading(true)))
      expect(gen.next().value).toEqual(apiCall)
      expect(gen.throw(errorBody).value).toEqual(put(putTokensRequest(fakeAction)))
      expect(gen.next().value).toEqual(put(toggleProjectsLoading(false)))
      expect(gen.next().value).toEqual(take(PUT_PROJECTS_REQUEST))
    })
  })
})
