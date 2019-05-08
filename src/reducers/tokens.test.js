
import tokens from './tokens'
import { tokensSuccess, changeTokensErrors, toggleTokensLoading } from '../actions/tokens'

describe('tokens reducer', () => {
  it('should return initial state', () => {
    const initialState = {
      errors: {},
      loading: false,
      success: false
    }
    expect(tokens(undefined, {})).toEqual(initialState)
  })

  it('should return expected state after postTokensSuccess action call', () => {
    const expectedState = {
      errors: {},
      loading: false,
      success: true
    }
    expect(tokens(undefined, tokensSuccess(true))).toEqual(expectedState)
  })

  it('should return expected state after changeTokensErrors action call', () => {
    const errors = {
      email: 'error',
      password: 'error'
    }
    const expectedState = {
      errors,
      loading: false,
      success: false
    }
    expect(tokens(undefined, changeTokensErrors(errors))).toEqual(expectedState)
  })

  it('should return expected state after toggleTokensLoading action call', () => {
    const expectedState = {
      errors: {},
      loading: true,
      success: false
    }
    expect(tokens(undefined, toggleTokensLoading(true))).toEqual(expectedState)
  })
})
