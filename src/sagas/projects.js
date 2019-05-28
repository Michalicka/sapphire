
import { changeProjectsData, changeProjectsErrors, toggleProjectsLoading, pushProject, editProject } from '../actions/projects'
import { changeModal } from '../actions/modal'
import { projects as projectsLink, project as projectLink } from '../apiLinks'
import { GET_PROJECTS_REQUEST, POST_PROJECTS_REQUEST, PUT_PROJECTS_REQUEST } from '../actionTypes/projects'
import { fetchLoggedEntity } from './utils'
import { put } from 'redux-saga/effects'

export const getProjects = fetchLoggedEntity.bind(
  null,
  'get',
  projectsLink,
  {
    request: GET_PROJECTS_REQUEST,
    success: [
      response => put(changeProjectsData(response.data.data))
    ],
    error: errors => changeProjectsErrors(errors),
    loading: value => toggleProjectsLoading(value)
  }
)

export const postProjects = fetchLoggedEntity.bind(
  null,
  'post',
  projectsLink,
  {
    request: POST_PROJECTS_REQUEST,
    success: [
      () => put(changeProjectsErrors({})),
      ({ data }) => put(pushProject(data.data)),
      () => put(changeModal(''))
    ],
    error: errors => changeProjectsErrors(errors),
    loading: value => toggleProjectsLoading(value)
  }
)

export const putProjects = fetchLoggedEntity.bind(
  null,
  'put',
  projectLink,
  {
    request: PUT_PROJECTS_REQUEST,
    success: [
      () => put(changeProjectsErrors({})),
      (response, action) => put(editProject(action.id, action.payload)),
      () => put(changeModal(''))
    ],
    error: errors => changeProjectsErrors(errors),
    loading: value => toggleProjectsLoading(value)
  }
)
