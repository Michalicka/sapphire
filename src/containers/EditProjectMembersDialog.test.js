
import { mapStateToProps, mapDispatchToProps } from './EditProjectMembersDialog'
import { putProjectMembersRequest, changeProjectsErrors } from '../actions/projects'
import { changeModal } from '../actions/modal'

describe('EditProjectMembersDialog container', () => {
  it('should return expected mapped state', () => {
    const state = {
      modal: {
        editProjectMembers: {
          show: true,
          id: 1
        }
      },
      projects: {
        loading: false,
        errors: {},
        data: [
          {
            id: 1,
            name: 'project',
            description: 'desc',
            members: [
              {
                id: 1,
                name: 'user',
                email: 'user@user.com',
                avatar: 'https://www.google.com/'
              }
            ]
          }
        ]
      }
    }
    const mappedState = mapStateToProps(state)

    expect(mappedState.open).toBe(state.modal.editProjectMembers.show)
    expect(mappedState.errors).toEqual(state.projects.errors)
    expect(mappedState.loading).toBe(state.projects.loading)
    expect(mappedState.id).toBe(state.modal.editProjectMembers.id)
  })

  it('should return expected mapped actions', () => {
    const dispatch = jest.fn()
    const values = {
      members: [1, 2]
    }
    const urlParams = {
      id: 1
    }
    const mappedActions = mapDispatchToProps(dispatch)

    mappedActions.send(values, urlParams)
    mappedActions.handleClose()
    mappedActions.changeErrors()

    expect(dispatch.mock.calls[0][0]).toEqual(putProjectMembersRequest(urlParams, values))
    expect(dispatch.mock.calls[1][0]).toEqual(changeModal('editProjectMembers', { show: false }))
    expect(dispatch.mock.calls[2][0]).toEqual(changeProjectsErrors({}))
  })
})
