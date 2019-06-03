
import { mapDispatchToProps, mapStateToProps } from './LoginForm'
import { postTokensRequest } from '../actions/tokens'

describe('LoginForm container', () => {
  it('should return mapped state props', () => {
    const initialState = {
      tokens: {
        errors: {},
        loading: false,
        status: 'Authorized'
      }
    }
    const mappedState = mapStateToProps(initialState)

    expect(mappedState.tokensErrors).toEqual(initialState.tokens.errors)
    expect(mappedState.loading).toEqual(initialState.tokens.loading)
    expect(mappedState.status).toEqual(initialState.tokens.status)
  })

  it('should return mapped actions props', () => {
    const dispatch = jest.fn()
    const mappedActions = mapDispatchToProps(dispatch)

    mappedActions.login({})
    expect(dispatch.mock.calls[0][0]).toEqual(postTokensRequest({}))
  })
})
