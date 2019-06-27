
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
      profile: {
        data: {
          id: 1,
          name: 'name',
          email: 'email'
        },
        errors: {
          putUsers: {}
        },
        loading: {
          putUsers: false
        }
      }
    }
    const initialValues = {
      name: state.profile.data.name,
      email: state.profile.data.email
    }

    const mappedState = mapStateToProps(state)

    expect(mappedState.open).toBe(true)
    expect(mappedState.errors).toEqual(state.profile.errors.putUsers)
    expect(mappedState.loading).toBe(state.profile.loading.putUsers)
    expect(mappedState.id).toBe(state.profile.data.id)
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
    expect(dispatch.mock.calls[2][0]).toEqual(changeUserErrors('putUsers')({}))
  })
})
