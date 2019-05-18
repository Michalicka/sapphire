
import { mapStateToProps, mapDispatchToProps } from './ProjectsContainer'
import { getProjectsRequest } from '../actions/projects'

describe('ProjectsContainer container', () => {
  it('should return mapped state props', () => {
    const state = {
      projects: {
        data: []
      }
    }
    const mappedState = mapStateToProps(state)

    expect(mappedState.items).toEqual(state.projects.data)
  })

  it('should return mapped actions props', () => {
    const dispatch = jest.fn()
    const mappedActions = mapDispatchToProps(dispatch)

    mappedActions.getItems()

    expect(dispatch.mock.calls[0][0]).toEqual(getProjectsRequest())
  })
})
