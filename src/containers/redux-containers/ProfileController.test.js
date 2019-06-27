
import { mapStateToProps, mapDispatchToProps } from './ProfileController'
import { deleteTokensRequest } from '../../actions/tokens'
import { changeModal } from '../../actions/modal'

describe('ProfileController container', () => {
  it('should return mapped state to props', () => {
    const state = {
      profile: {
        data: {
          name: 'user',
          avatar: 'avatar'
        }
      }
    }
    const mappedState = mapStateToProps(state)

    expect(mappedState.initial).toBe(state.profile.data.name.charAt(0).toUpperCase())
    expect(mappedState.avatar).toBe(state.profile.data.avatar)
  })

  it('should return mapped actions to props', () => {
    const dispatch = jest.fn()
    const mappedActions = mapDispatchToProps(dispatch)
    mappedActions.logout()
    mappedActions.editProfile()
    mappedActions.changePassword()
    mappedActions.changeAvatar()

    expect(dispatch.mock.calls[0][0]).toEqual(deleteTokensRequest())
    expect(dispatch.mock.calls[1][0]).toEqual(changeModal('editProfile', { show: true }))
    expect(dispatch.mock.calls[2][0]).toEqual(changeModal('changePassword', { show: true }))
    expect(dispatch.mock.calls[3][0]).toEqual(changeModal('changeAvatar', { show: true }))
  })
})
