
import { mapStateToProps, mapDispatchToProps } from './ProfileController'
import { deleteTokensRequest } from '../actions/tokens'
import { changeModal } from '../actions/modal'

describe('ProfileController container', () => {
  it('should return mapped state to props', () => {
    const state = {
      user: {
        data: {
          name: 'user',
          avatar: 'avatar'
        }
      }
    }
    const mappedState = mapStateToProps(state)

    expect(mappedState.initial).toBe(state.user.data.name.charAt(0).toUpperCase())
    expect(mappedState.avatar).toBe(state.user.data.avatar)
  })

  it('should return mapped actions to props', () => {
    const dispatch = jest.fn()
    const mappedActions = mapDispatchToProps(dispatch)
    mappedActions.logout()
    mappedActions.editProfile()
    mappedActions.changePassword()

    expect(dispatch.mock.calls[0][0]).toEqual(deleteTokensRequest())
    expect(dispatch.mock.calls[1][0]).toEqual(changeModal('editProfile'))
    expect(dispatch.mock.calls[2][0]).toEqual(changeModal('changePassword'))
  })
})
