
import tokens from './tokens'
import { postTokensSuccess, changeTokensErrors, toggleTokensLoading } from '../actions/tokens'

describe('tokens reducer', () => {
  it('should return initial state', () => {
    const initialState = {
      errors: {},
      loading: false
    }
    expect(tokens(undefined, {})).toEqual(initialState)
  })

  it('should return expected state after postTokensSuccess action call', () => {
    const expectedState = {
      errors: {},
      loading: false,
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
      errors,
      loading: false
    }
    expect(tokens(undefined, changeTokensErrors(errors))).toEqual(expectedState)
  })

  it('should return expected state after toggleTokensLoading action call', () => {
    const expectedState = {
      errors: {},
      loading: true
    }
    expect(tokens(undefined, toggleTokensLoading(true))).toEqual(expectedState)
  })
})
