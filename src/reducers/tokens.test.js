
import tokens from './tokens'
import { postTokensSuccess, changeTokensErrors } from '../actions/tokens'

describe('tokens reducer', () => {
  it('should return initial state', () => {
    const initialState = {
      errors: {}
    }
    expect(tokens(undefined, {})).toEqual(initialState)
  })

  it('should return expected state after postTokensSuccess action call', () => {
    const expectedState = {
      errors: {},
      postTokensSuccess: true
    }
    expect(tokens(undefined, postTokensSuccess())).toEqual(expectedState)
  })

  it('should return expected state after changeTokensErrors action call', () => {
    const errors = {
      email: 'error',
      password: 'error'
    }
    const expectedState = {
      errors
    }
    expect(tokens(undefined, changeTokensErrors(errors))).toEqual(expectedState)
  })
})
