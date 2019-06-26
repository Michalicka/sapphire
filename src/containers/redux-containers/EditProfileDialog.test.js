
import { mapStateToProps, mapDispatchToProps } from './EditProfileDialog'
import { putUserRequest, changeUserErrors } from '../../actions/profile'
import { changeModal } from '../../actions/modal'

describe('EditProfileDialog container', () => {
  it('should return expected mapped state props', () => {
    const state = {
      modal: {
        editProfile: {
          show: true
        }
      },
      user: {
        data: {
          id: 1,
          name: 'name',
          email: 'email'
        },
        errors: {},
        loading: false
      }
    }
    const initialValues = {
      name: state.user.data.name,
      email: state.user.data.email
    }

    const mappedState = mapStateToProps(state)

    expect(mappedState.open).toBe(true)
    expect(mappedState.errors).toEqual(state.user.errors)
    expect(mappedState.loading).toBe(state.user.loading)
    expect(mappedState.id).toBe(state.user.data.id)
    expect(mappedState.initialValues).toEqual(initialValues)
  })

  it('should return expected mapped actions props', () => {
    const dispatch = jest.fn()
    const values = {
      name: 'name'
    }
    const urlParams = {
      id: 1
    }

    const mappedActions = mapDispatchToProps(dispatch)

    mappedActions.send(values, urlParams)
    mappedActions.handleClose()
    mappedActions.changeErrors()

    expect(dispatch.mock.calls[0][0]).toEqual(putUserRequest(values, urlParams))
    expect(dispatch.mock.calls[1][0]).toEqual(changeModal('editProfile', { show: false }))
    expect(dispatch.mock.calls[2][0]).toEqual(changeUserErrors({}))
  })
})
