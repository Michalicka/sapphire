
import { mapStateToProps, mapDispatchToProps } from './CreateProjectDialog'
import { changeModal } from '../actions/modal'
import { postProjectRequest } from '../actions/projects'

describe('CreateProjectDialog containers', () => {
  it('should return mapped state props', () => {
    const state = {
      modal: 'createProject',
      projects: {
        errors: {},
        loading: true
      }
    }

    const mappedState = mapStateToProps(state)

    expect(mappedState.open).toBe(true)
    expect(mappedState.errors).toEqual(state.projects.errors)
    expect(mappedState.loading).toBe(state.projects.loading)
  })

  it('should return mapped action props', () => {
    const dispatch = jest.fn()
    const project = {
      name: 'project',
      description: 'description'
    }

    const mappedAction = mapDispatchToProps(dispatch)
    mappedAction.send(project)
    mappedAction.handleClose()

    expect(dispatch.mock.calls[0][0]).toEqual(postProjectRequest(project))
    expect(dispatch.mock.calls[1][0]).toEqual(changeModal(''))
  })
})
