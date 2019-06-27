
import { mapStateToProps, mapDispatchToProps } from './ChangeAvatarDialog'
import { postAvatarRequest, changeUserErrors } from '../../actions/profile'
import { changeModal } from '../../actions/modal'

describe('ChangeAvatarDialog container', () => {
  it('should return expected mapped state props', () => {
    const state = {
      modal: {
        changeAvatar: {
          show: true
        }
      },
      profile: {
        errors: {
          postAvatars: {}
        },
        loading: {
          postAvatars: false
        }
      }
    }

    const mappedState = mapStateToProps(state)

    expect(mappedState.open).toBe(true)
    expect(mappedState.errors).toEqual(state.profile.errors.postAvatars)
    expect(mappedState.loading).toBe(state.profile.loading.postAvatars)
  })

  it('should return expected mapped actions props', () => {
    const dispatch = jest.fn()
    const values = {
      password: 'password',
      password_confirmation: 'password'
    }

    const mappedActions = mapDispatchToProps(dispatch)

    mappedActions.send(values)
    mappedActions.handleClose()
    mappedActions.changeErrors()

    expect(dispatch.mock.calls[0][0]).toEqual(postAvatarRequest(values))
    expect(dispatch.mock.calls[1][0]).toEqual(changeModal('changeAvatar', { show: false }))
    expect(dispatch.mock.calls[2][0]).toEqual(changeUserErrors('postAvatars')({}))
  })
})
