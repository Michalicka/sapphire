
import { GET_PROJECTS_REQUEST, CHANGE_PROJECTS_DATA, CHANGE_PROJECTS_ERRORS, TOGGLE_PROJECTS_LOADING, POST_PROJECTS_REQUEST, PUSH_PROJECT } from '../actionTypes/projects'
import { getProjectsRequest, changeProjectsData, changeProjectsErrors, toggleProjectsLoading, postProjectRequest, pushProject } from './projects'

describe('projects actions', () => {
  it('getProjectsRequest', () => {
    const expectedValue = {
      type: GET_PROJECTS_REQUEST
    }
    expect(getProjectsRequest()).toEqual(expectedValue)
  })

  it('changeProjectsData', () => {
    const data = [
      {
        id: 1,
        title: 'title',
        description: 'description'
      }
    ]
    const expectedValue = {
      type: CHANGE_PROJECTS_DATA,
      data
    }
    expect(changeProjectsData(data)).toEqual(expectedValue)
  })

  it('changeProjectsErrors', () => {
    const errors = {
      name: 'error',
      description: 'error'
    }
    const expectedValue = {
      type: CHANGE_PROJECTS_ERRORS,
      errors
    }
    expect(changeProjectsErrors(errors)).toEqual(expectedValue)
  })

  it('toggleProjectsLoading', () => {
    const value = true
    const expectedValue = {
      type: TOGGLE_PROJECTS_LOADING,
      value
    }
    expect(toggleProjectsLoading(value)).toEqual(expectedValue)
  })

  it('postProjectRequest', () => {
    const payload = {}
    const expectedValue = {
      type: POST_PROJECTS_REQUEST,
      payload
    }
    expect(postProjectRequest(payload)).toEqual(expectedValue)
  })

  it('pushProject', () => {
    const project = {
      id: 1,
      name: 'Project',
      description: 'description'
    }
    const expectedValue = {
      type: PUSH_PROJECT,
      project
    }

    expect(pushProject(project)).toEqual(expectedValue)
  })
})
