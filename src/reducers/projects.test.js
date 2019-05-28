
import projects from './projects'
import { changeProjectsData, changeProjectsErrors, toggleProjectsLoading, pushProject, removeProject, editProject } from '../actions/projects'

describe('projects reducer', () => {
  const expectedState = {
    data: [],
    errors: {},
    loading: false
  }
  it('should return initialState', () => {
    expect(projects(undefined, {})).toEqual(expectedState)
  })

  it('should return state after changeProjectsData action', () => {
    const data = [
      {
        id: 1,
        name: 'name',
        description: 'description'
      }
    ]
    expect(projects(undefined, changeProjectsData(data))).toEqual({ ...expectedState, data })
  })

  it('should return state after changeProjectsErrors', () => {
    const errors = {
      name: 'error',
      description: 'error'
    }
    expect(projects(undefined, changeProjectsErrors(errors))).toEqual({ ...expectedState, errors })
  })

  it('should return state after toggleProjectsLoading', () => {
    const loading = true
    expect(projects(undefined, toggleProjectsLoading(true))).toEqual({ ...expectedState, loading })
  })

  it('should return state after pushProject', () => {
    const project = {
      id: 1,
      name: 'project',
      description: 'description'
    }
    const data = [...expectedState.data, project]
    const newState = { ...expectedState, data }
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
    const newData = [ { ...data[0] }, { id, ...editedProject } ]
    const newState = {
      ...expectedState,
      data: newData
    }

    expect(projects({ ...expectedState, data }, editProject(id, editedProject))).toEqual(newState)
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
    const newData = [ { ...data[0] } ]
    const newState = {
      ...expectedState,
      data: newData
    }

    expect(projects({ ...expectedState, data }, removeProject(id))).toEqual(newState)
  })
})
