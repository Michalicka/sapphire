
import { changeProjectsData, changeProjectsErrors, toggleProjectsLoading } from '../actions/projects'
import { projects as projectsLink } from '../apiLinks'
import { GET_PROJECTS_REQUEST } from '../actionTypes/projects'
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
