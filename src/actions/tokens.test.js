
import { postTokensRequest, changeTokensStatus, changeTokensErrors, toggleTokensLoading, refreshTokenWatch, putTokensRequest } from './tokens'
import { POST_TOKENS_REQUEST, CHANGE_TOKENS_STATUS, CHANGE_TOKENS_ERRORS, TOGGLE_TOKENS_LOADING, REFRESH_TOKEN_WATCH, PUT_TOKENS_REQUEST } from '../actionTypes/tokens'

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

  it('changeTokensStatus', () => {
    const authorized = 'Authorized'
    const expectedValue = {
      type: CHANGE_TOKENS_STATUS,
      value: authorized
    }
    expect(changeTokensStatus(authorized)).toEqual(expectedValue)
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

  it('refreshTokenWatch', () => {
    const expectedValue = {
      type: REFRESH_TOKEN_WATCH
    }
    expect(refreshTokenWatch()).toEqual(expectedValue)
  })

  it('putTokensRequest', () => {
    const nextAction = 'action'
    const expectedValue = {
      type: PUT_TOKENS_REQUEST,
      nextAction
    }
    expect(putTokensRequest(nextAction)).toEqual(expectedValue)
  })
})
