
import { getUsersRequest } from '../actions/users'
import { getProjectMembersRequest } from '../actions/projects'
import { mapStateToProps, mapDispatchToProps } from './ProjectMembersSearch'

describe('ProjectMembersSearch container', () => {
  it('should return expected mapped state', () => {
    const state = {
      modal: {
        editMembers: {
          id: 1
        }
      },
      projects: {
        loading: false,
        data: [
          {
            id: 1,
            name: 'project',
            members: [
              {
                id: 1,
                name: 'user',
                email: 'user.@user.com',
                avatar: 'https://www.google.com/'
              }
            ]
          }
        ]
      },
      users: {
        data: [
          {
            id: 1,
            name: 'user',
            email: 'user.@user.com',
            avatar: 'https://www.google.com/'
          },
          {
            id: 2,
            name: 'user2',
            email: 'user2.@user.com',
            avatar: 'https://www.google.com/'
          },
          {
            id: 3,
            name: 'user3',
            email: 'user3.@user.com',
            avatar: 'https://www.google.com/'
          }
        ]
      }
    }
    const mappedState = mapStateToProps(state)
    const project = state.projects.data.find(item => item.id === state.modal.editMembers.id)

    expect(mappedState.loading).toBe(state.projects.loading)
    expect(mappedState.items).toEqual(state.users.data)
    expect(mappedState.selectedItems).toEqual(project.members)
    expect(mappedState.id).toBe(project.id)
  })

  it('should return expected mapped actions', () => {
    const dispatch = jest.fn()
    const id = 1
    const name = 'user'
    const mappedAction = mapDispatchToProps(dispatch)

    mappedAction.getItems(id)
    expect(dispatch.mock.calls[0][0]).toEqual(getProjectMembersRequest({ id }))

    mappedAction.getNewItems(name)
    expect(dispatch.mock.calls[1][0]).toEqual(getUsersRequest(name))
  })
})
