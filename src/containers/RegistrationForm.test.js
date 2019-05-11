
import { mapStateToProps, mapDispatchToProps } from './RegistrationForm'
import { userRegistration } from '../actions/user'

describe('RegistrationForm container', () => {
  it('should return mapped state props', () => {
    const initialState = {
      user: {
        errors: {},
        data: {
          registrationSuccess: true
        },
        loading: false
      }
    }
    const mappedState = mapStateToProps(initialState)

    expect(mappedState.userErrors).toEqual(initialState.user.errors)
    expect(mappedState.registrationSuccess).toEqual(initialState.user.data.registrationSuccess)
    expect(mappedState.loading).toEqual(initialState.user.loading)
  })

  it('should return mapped action props', () => {
    const dispatch = jest.fn()
    const mappedActions = mapDispatchToProps(dispatch)

    mappedActions.registration({})
    expect(dispatch.mock.calls[0][0]).toEqual(userRegistration({}))
  })
})
