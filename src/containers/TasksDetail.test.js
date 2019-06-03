
import { mapStateToProps } from './TasksDetail'

describe('TasksDetail container', () => {
  it('should return expected mapped stat', () => {
    const state = {
      projects: {
        data: [
          {
            id: 1,
            title: 'title',
            description: 'description'
          }
        ]
      }
    }
    const mappedState = mapStateToProps(state, { id: 1 })

    expect(mappedState.title).toBe(state.projects.data[0].title)
    expect(mappedState.description).toBe(state.projects.data[0].description)
  })
})
