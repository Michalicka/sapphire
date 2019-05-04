
import { postTokensRequest, postTokensSuccess, changeTokensErrors, toggleTokensLoading } from './tokens'
import { POST_TOKENS_REQUEST, POST_TOKENS_SUCCESS, CHANGE_TOKENS_ERRORS, TOGGLE_TOKENS_LOADING } from '../actionTypes/tokens'

describe('action tokens', () => {
  it('postTokensRequest', () => {
    const payload = {
      email: '',
      password: ''
    }
    const expectedValue = {
      type: POST_TOKENS_REQUEST,
      payload
    }
    expect(postTokensRequest(payload)).toEqual(expectedValue)
  })

  it('postTokensSuccess', () => {
    const expectedValue = {
      type: POST_TOKENS_SUCCESS
    }
    expect(postTokensSuccess()).toEqual(expectedValue)
  })

  it('changeTokensError', () => {
    const errors = {}
    const expectedValue = {
      type: CHANGE_TOKENS_ERRORS,
      errors
    }
    expect(changeTokensErrors(errors)).toEqual(expectedValue)
  })

  it('toggleTokensLoading', () => {
    const expectedValue = {
      type: TOGGLE_TOKENS_LOADING,
      value: true
    }
    expect(toggleTokensLoading(true)).toEqual(expectedValue)
  })
})
