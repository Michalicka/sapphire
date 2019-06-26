
import { getTasksRequest } from '../actions/tasks'
import { mapStateToProps, mapDispatchToProps } from './TasksContainer'

describe('TasksContainer container', () => {
  it('should return expected mapped state', () => {
    const state = {
      tasks: {
        loading: {
          getTasks: true
        },
        data: [
          {
            id: 1,
            title: 2,
            status: {
              id: 1,
              name: 'backlog'
            }
          }
        ]
      }
    }
    const statusId = 1

    const mappedState = mapStateToProps(state, { statusId })

    expect(mappedState.items).toEqual(state.tasks.data)
    expect(mappedState.loading).toEqual(state.tasks.loading.getTasks)
  })

  it('should return expected mapped actions', () => {
    const dispatch = jest.fn()
    const id = 1

    const mappedActions = mapDispatchToProps(dispatch, { id })
    mappedActions.getItems()

    expect(dispatch.mock.calls[0][0]).toEqual(getTasksRequest({ id }))
  })
})
