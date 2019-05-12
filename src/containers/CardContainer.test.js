
import { mapStateToProps } from './CardContainer'

describe('CardContainer container', () => {
  it('should return mapped state props', () => {
    const state = {
      projects: {
        data: []
      }
    }
    const mappedState = mapStateToProps(state)

    expect(mappedState.items).toEqual(state.projects.data)
  })
})
