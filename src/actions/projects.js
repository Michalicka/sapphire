
import { GET_PROJECTS_REQUEST, CHANGE_PROJECTS_DATA, CHANGE_PROJECTS_ERRORS, TOGGLE_PROJECTS_LOADING, POST_PROJECTS_REQUEST, PUSH_PROJECT, EDIT_PROJECT, REMOVE_PROJECT, PUT_PROJECTS_REQUEST, DELETE_PROJECTS_REQUEST, GET_PROJECT_MEMBERS_REQUEST, PUT_PROJECT_MEMBERS_REQUEST } from '../actionTypes/projects'

export const getProjectsRequest = () => ({
  type: GET_PROJECTS_REQUEST
})

export const changeProjectsData = data => ({
  type: CHANGE_PROJECTS_DATA,
  data
})

export const changeProjectsErrors = key => value => ({
  type: CHANGE_PROJECTS_ERRORS,
  key,
  value
})

export const toggleProjectsLoading = key => value => ({
  type: TOGGLE_PROJECTS_LOADING,
  key,
  value
})

export const postProjectRequest = payload => ({
  type: POST_PROJECTS_REQUEST,
  payload
})

export const pushProject = item => ({
  type: PUSH_PROJECT,
  item
})

export const putProjectsRequest = (payload, urlParams) => ({
  type: PUT_PROJECTS_REQUEST,
  payload,
  urlParams
})

export const editProject = (id, data) => ({
  type: EDIT_PROJECT,
  id,
  data
})

export const removeProject = id => ({
  type: REMOVE_PROJECT,
  id
})

export const deleteProjectsRequest = urlParams => ({
  type: DELETE_PROJECTS_REQUEST,
  urlParams
})

export const getProjectMembersRequest = urlParams => ({
  type: GET_PROJECT_MEMBERS_REQUEST,
  urlParams
})

export const putProjectMembersRequest = (urlParams, payload) => ({
  type: PUT_PROJECT_MEMBERS_REQUEST,
  urlParams,
  payload
})
