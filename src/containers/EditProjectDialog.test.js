
import { mapStateToProps, mapDispatchToProps } from './EditProjectDialog'
import { changeModal } from '../actions/modal'
import { putProjectsRequest, changeProjectsErrors } from '../actions/projects'

describe('EditProjectDialog containers', () => {
  it('should return mapped state props', () => {
    const state = {
      modal: {
        editProject: {
          show: false,
          id: 1
        }
      },
      projects: {
        errors: {},
        loading: true,
        data: [
          {
            id: 1,
            name: 'project',
            description: 'description'
          }
        ]
      }
    }

    const mappedState = mapStateToProps(state)

    expect(mappedState.open).toBe(false)
    expect(mappedState.errors).toEqual(state.projects.errors)
    expect(mappedState.loading).toBe(state.projects.loading)
  })

  it('should return mapped action props', () => {
    const dispatch = jest.fn()
    const project = {
      name: 'project',
      description: 'description'
    }
    const urlParams = {
      id: 1
    }

    const mappedAction = mapDispatchToProps(dispatch)
    mappedAction.send(project, urlParams)
    mappedAction.handleClose()
    mappedAction.changeErrors()

    expect(dispatch.mock.calls[0][0]).toEqual(putProjectsRequest(project, urlParams))
    expect(dispatch.mock.calls[1][0]).toEqual(changeModal('editProject', { show: false }))
    expect(dispatch.mock.calls[2][0]).toEqual(changeProjectsErrors({}))
  })
})
