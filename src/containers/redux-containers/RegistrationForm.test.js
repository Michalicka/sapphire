
import { mapStateToProps, mapDispatchToProps } from './RegistrationForm'
import { postUsersRequest } from '../../actions/profile'

describe('RegistrationForm container', () => {
  it('should return mapped state props', () => {
    const initialState = {
      profile: {
        errors: {
          postUsers: {}
        },
        data: {
          registrationSuccess: true
        },
        loading: {
          postUsers: false
        }
      }
    }
    const mappedState = mapStateToProps(initialState)

    expect(mappedState.userErrors).toEqual(initialState.profile.errors.postUsers)
    expect(mappedState.registrationSuccess).toEqual(initialState.profile.data.registrationSuccess)
    expect(mappedState.loading).toEqual(initialState.profile.loading.postUsers)
  })

  it('should return mapped action props', () => {
    const dispatch = jest.fn()
    const mappedActions = mapDispatchToProps(dispatch)

    mappedActions.registration({})
    expect(dispatch.mock.calls[0][0]).toEqual(postUsersRequest({}))
  })
})
