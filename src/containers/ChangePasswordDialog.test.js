
import { mapStateToProps, mapDispatchToProps } from './ChangePasswordDialog'
import { putPasswordsRequest, changeUserErrors } from '../actions/user'
import { changeModal } from '../actions/modal'

describe('ChangePasswordDialog container', () => {
  it('should return expected mapped state props', () => {
    const state = {
      modal: 'changePassword',
      user: {
        data: {
          id: 1
        },
        errors: {},
        loading: false
      }
    }

    const mappedState = mapStateToProps(state)

    expect(mappedState.open).toBe(true)
    expect(mappedState.errors).toEqual(state.user.errors)
    expect(mappedState.loading).toBe(state.user.loading)
    expect(mappedState.id).toBe(state.user.data.id)
  })

  it('should return expected mapped actions props', () => {
    const dispatch = jest.fn()
    const values = {
      password: 'password',
      password_confirmation: 'password'
    }
    const urlParams = {
      id: 1
    }

    const mappedActions = mapDispatchToProps(dispatch)

    mappedActions.send(values, urlParams)
    mappedActions.handleClose()
    mappedActions.changeErrors()

    expect(dispatch.mock.calls[0][0]).toEqual(putPasswordsRequest(values, urlParams))
    expect(dispatch.mock.calls[1][0]).toEqual(changeModal(''))
    expect(dispatch.mock.calls[2][0]).toEqual(changeUserErrors({}))
  })
})
