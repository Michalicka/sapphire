
import { GET_PROJECTS_REQUEST, CHANGE_PROJECTS_DATA, CHANGE_PROJECTS_ERRORS, TOGGLE_PROJECTS_LOADING, POST_PROJECTS_REQUEST, PUSH_PROJECT, PUT_PROJECTS_REQUEST, EDIT_PROJECT, REMOVE_PROJECT, DELETE_PROJECTS_REQUEST, GET_PROJECT_MEMBERS_REQUEST, PUT_PROJECT_MEMBERS_REQUEST } from '../actionTypes/projects'
import { getProjectsRequest, changeProjectsData, changeProjectsErrors, toggleProjectsLoading, postProjectRequest, pushProject, putProjectsRequest, editProject, removeProject, deleteProjectsRequest, getProjectMembersRequest, putProjectMembersRequest } from './projects'

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
    const key = 'getMe'
    const value = {
      name: 'error',
      description: 'error'
    }
    const expectedValue = {
      type: CHANGE_PROJECTS_ERRORS,
      key,
      value
    }
    expect(changeProjectsErrors(key)(value)).toEqual(expectedValue)
  })

  it('toggleProjectsLoading', () => {
    const key = 'getMe'
    const value = true
    const expectedValue = {
      type: TOGGLE_PROJECTS_LOADING,
      key,
      value
    }
    expect(toggleProjectsLoading(key)(value)).toEqual(expectedValue)
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
    const item = {
      id: 1,
      name: 'Project',
      description: 'description'
    }
    const expectedValue = {
      type: PUSH_PROJECT,
      item
    }

    expect(pushProject(item)).toEqual(expectedValue)
  })

  it('putProjectsRequest', () => {
    const payload = {
      name: 'name'
    }
    const urlParams = {
      id: 1
    }
    const expectedValue = {
      type: PUT_PROJECTS_REQUEST,
      payload,
      urlParams
    }

    expect(putProjectsRequest(payload, urlParams)).toEqual(expectedValue)
  })

  it('editProject', () => {
    const id = 1
    const data = {
      name: 'name'
    }
    const expectedValue = {
      type: EDIT_PROJECT,
      id,
      data
    }

    expect(editProject(id, data)).toEqual(expectedValue)
  })

  it('removeProject', () => {
    const id = 1
    const expectedValue = {
      type: REMOVE_PROJECT,
      id
    }

    expect(removeProject(id)).toEqual(expectedValue)
  })

  it('deleteProjectRequest', () => {
    const urlParams = {
      id: 1
    }
    const expectedValue = {
      type: DELETE_PROJECTS_REQUEST,
      urlParams
    }

    expect(deleteProjectsRequest(urlParams)).toEqual(expectedValue)
  })

  it('getProjectMembersRequest', () => {
    const urlParams = {
      id: 1
    }
    const expectedValue = {
      type: GET_PROJECT_MEMBERS_REQUEST,
      urlParams
    }

    expect(getProjectMembersRequest(urlParams)).toEqual(expectedValue)
  })

  it('putProjectMembersRequest', () => {
    const urlParams = {
      id: 1
    }
    const payload = {
      members: [1, 2]
    }
    const expectedValue = {
      type: PUT_PROJECT_MEMBERS_REQUEST,
      urlParams,
      payload
    }

    expect(putProjectMembersRequest(urlParams, payload)).toEqual(expectedValue)
  })
})
