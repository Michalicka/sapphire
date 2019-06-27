
import tokens from './tokens'
import { changeTokensStatus, changeTokensErrors, toggleTokensLoading } from '../actions/tokens'
import { getDefaultValues } from './utils'

describe('tokens reducer', () => {
  const tokensDefault = getDefaultValues(['postTokens', 'putTokens', 'deleteTokens'])
  const initialState = {
    data: {
      status: null
    },
    errors: tokensDefault({}),
    loading: tokensDefault(false)
  }
  it('should return initial state', () => {
    expect(tokens(undefined, {})).toEqual(initialState)
  })

  it('should return expected state after changeTokensStatus action call', () => {
    const status = 'Authorized'
    const data = { ...initialState.data, status }
    const expectedState = { ...initialState, data }
    expect(tokens(undefined, changeTokensStatus(status))).toEqual(expectedState)
  })

  it('should return expected state after changeTokensErrors action call', () => {
    const value = {
      email: 'error',
      password: 'error'
    }
    const key = 'postTokens'
    const errors = { ...initialState.errors, [key]: value }
    const expectedState = { ...initialState, errors }
    expect(tokens(undefined, changeTokensErrors(key)(value))).toEqual(expectedState)
  })

  it('should return expected state after toggleTokensLoading action call', () => {
    const value = true
    const key = 'postTokens'
    const loading = { ...initialState.loading, [key]: value }
    const expectedState = { ...initialState, loading }
    expect(tokens(undefined, toggleTokensLoading(key)(true))).toEqual(expectedState)
  })
})
