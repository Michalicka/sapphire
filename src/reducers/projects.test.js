
import projects from './projects'
import { changeProjectsData, changeProjectsErrors, toggleProjectsLoading, pushProject, removeProject, editProject } from '../actions/projects'
import { getDefaultValues } from './utils'

describe('projects reducer', () => {
  const projectsDefault = getDefaultValues(['getProjects', 'postProjects', 'putProjects', 'deleteProjects', 'getProjectsMembers', 'putProjectsMembers'])
  const initialState = {
    data: [],
    errors: projectsDefault({}),
    loading: projectsDefault(false)
  }
  it('should return initialState', () => {
    expect(projects(undefined, {})).toEqual(initialState)
  })

  it('should return state after changeProjectsData action', () => {
    const data = [
      {
        id: 1,
        name: 'name',
        description: 'description'
      }
    ]
    const expectedState = { ...initialState, data }
    expect(projects(undefined, changeProjectsData(data))).toEqual(expectedState)
  })

  it('should return state after changeProjectsErrors', () => {
    const key = 'getProjects'
    const value = {
      name: 'error',
      description: 'error'
    }

    const errors = { ...initialState.errors, [key]: value }
    const expectedState = { ...initialState, errors }

    expect(projects(undefined, changeProjectsErrors(key)(value))).toEqual(expectedState)
  })

  it('should return state after toggleProjectsLoading', () => {
    const key = 'getProjects'
    const value = true

    const loading = { ...initialState.loading, [key]: value }
    const expectedState = { ...initialState, loading }
    expect(projects(undefined, toggleProjectsLoading(key)(value))).toEqual(expectedState)
  })

  it('should return state after pushProject', () => {
    const project = {
      id: 1,
      name: 'project',
      description: 'description'
    }
    const data = [...initialState.data, project]
    const newState = { ...initialState, data }
    expect(projects(undefined, pushProject(project))).toEqual(newState)
  })

  it('should return state after editProject', () => {
    const data = [
      {
        id: 1,
        name: 'project1',
        description: 'desc'
      },
      {
        id: 2,
        name: 'project3',
        description: 'desc'
      }
    ]
    const editedProject = {
      name: 'project2',
      description: 'desc'
    }
    const id = 2
    const newData = [{ ...data[0] }, { id, ...editedProject }]
    const newState = {
      ...initialState,
      data: newData
    }

    expect(projects({ ...initialState, data }, editProject(id, editedProject))).toEqual(newState)
  })

  it('should return state after removeProject', () => {
    const data = [
      {
        id: 1,
        name: 'project1',
        description: 'desc'
      },
      {
        id: 2,
        name: 'project2',
        description: 'desc'
      }
    ]
    const id = 2
    const newData = [{ ...data[0] }]
    const newState = {
      ...initialState,
      data: newData
    }

    expect(projects({ ...initialState, data }, removeProject(id))).toEqual(newState)
  })
})
