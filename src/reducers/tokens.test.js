
import tokens from './tokens'
import { changeTokensStatus, changeTokensErrors, toggleTokensLoading } from '../actions/tokens'

describe('tokens reducer', () => {
  const initialState = {
    errors: {},
    loading: false
  }
  it('should return initial state', () => {
    expect(tokens(undefined, {})).toEqual(initialState)
  })

  it('should return expected state after changeTokensStatus action call', () => {
    const authorized = 'Authorized'
    expect(tokens(undefined, changeTokensStatus(authorized))).toEqual({ ...initialState, status: authorized })
  })

  it('should return expected state after changeTokensErrors action call', () => {
    const errors = {
      email: 'error',
      password: 'error'
    }
    expect(tokens(undefined, changeTokensErrors(errors))).toEqual({ ...initialState, errors })
  })

  it('should return expected state after toggleTokensLoading action call', () => {
    expect(tokens(undefined, toggleTokensLoading(true))).toEqual({ ...initialState, loading: true })
  })
})
