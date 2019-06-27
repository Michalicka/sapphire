
import { changeProjectsData, changeProjectsErrors, toggleProjectsLoading, pushProject, editProject, removeProject } from '../actions/projects'
import { changeModal } from '../actions/modal'
import { projects as projectsLink, project as projectLink, projectMembers as projectMembersLink } from '../apiLinks'
import { GET_PROJECTS_REQUEST, POST_PROJECTS_REQUEST, PUT_PROJECTS_REQUEST, DELETE_PROJECTS_REQUEST, GET_PROJECT_MEMBERS_REQUEST, PUT_PROJECT_MEMBERS_REQUEST } from '../actionTypes/projects'
import { fetchLoggedEntity } from './utils'
import { put } from 'redux-saga/effects'

const getProjectsKey = 'getProjects'
const getProjectsErrors = changeProjectsErrors(getProjectsKey)
const getProjectsLoading = toggleProjectsLoading(getProjectsKey)

export const getProjects = fetchLoggedEntity.bind(
  null,
  'get',
  projectsLink,
  {
    request: GET_PROJECTS_REQUEST,
    success: [
      response => put(changeProjectsData(response.data.data)),
      () => put(getProjectsErrors({}))
    ],
    error: getProjectsErrors,
    loading: getProjectsLoading
  }
)

const postProjectsKey = 'postProjects'
const postProjectsErrors = changeProjectsErrors(postProjectsKey)
const postProjectsLoading = toggleProjectsLoading(postProjectsKey)

export const postProjects = fetchLoggedEntity.bind(
  null,
  'post',
  projectsLink,
  {
    request: POST_PROJECTS_REQUEST,
    success: [
      () => put(postProjectsErrors({})),
      ({ data }) => put(pushProject(data.data)),
      () => put(changeModal('createProject', { show: false }))
    ],
    error: postProjectsErrors,
    loading: postProjectsLoading
  }
)

const putProjectsKey = 'putProjects'
const putProjectsErrors = changeProjectsErrors(putProjectsKey)
const putProjectsLoading = toggleProjectsLoading(putProjectsKey)

export const putProjects = fetchLoggedEntity.bind(
  null,
  'put',
  projectLink,
  {
    request: PUT_PROJECTS_REQUEST,
    success: [
      () => put(putProjectsErrors({})),
      (response, action) => put(editProject(action.urlParams.id, action.payload)),
      () => put(changeModal('editProject', { show: false }))
    ],
    error: putProjectsErrors,
    loading: putProjectsLoading
  }
)

const deleteProjectsKey = 'deleteProjects'
const deleteProjectsErrors = changeProjectsErrors(deleteProjectsKey)
const deleteProjectsLoading = toggleProjectsLoading(deleteProjectsKey)

export const deleteProjects = fetchLoggedEntity.bind(
  null,
  'delete',
  projectLink,
  {
    request: DELETE_PROJECTS_REQUEST,
    success: [
      () => put(deleteProjectsErrors({})),
      (response, action) => put(removeProject(action.urlParams.id))
    ],
    error: deleteProjectsErrors,
    loading: deleteProjectsLoading
  }
)

const getProjectsMembersKey = 'getProjectsMembers'
const getProjectsMembersErrors = changeProjectsErrors(getProjectsMembersKey)
const getProjectsMembersLoading = toggleProjectsLoading(getProjectsMembersKey)

export const getProjectMembers = fetchLoggedEntity.bind(
  null,
  'get',
  projectMembersLink,
  {
    request: GET_PROJECT_MEMBERS_REQUEST,
    success: [
      () => put(getProjectsMembersErrors({})),
      (response, action) => {
        return put(editProject(action.urlParams.id, { members: response.data.data }))
      }
    ],
    error: getProjectsMembersErrors,
    loading: getProjectsMembersLoading
  }
)

const putProjectsMembersKey = 'putProjectsMembers'
const putProjectsMembersErrors = changeProjectsErrors(putProjectsMembersKey)
const putProjectsMembersLoading = toggleProjectsLoading(putProjectsMembersKey)

export const putProjectMembers = fetchLoggedEntity.bind(
  null,
  'put',
  projectMembersLink,
  {
    request: PUT_PROJECT_MEMBERS_REQUEST,
    success: [
      () => put(putProjectsMembersErrors({})),
      () => put(changeModal('editProjectMembers', { show: false })),
      (respone, { urlParams }) => put(editProject(urlParams.id, { members: undefined }))
    ],
    error: putProjectsMembersErrors,
    loading: putProjectsMembersLoading
  }
)
