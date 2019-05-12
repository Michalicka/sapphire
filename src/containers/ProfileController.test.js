
import { mapStateToProps } from './ProfileController'

describe('ProfileController container', () => {
  it('shoul return mapped state to props', () => {
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
})
