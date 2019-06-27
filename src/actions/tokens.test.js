
import { postTokensRequest, changeTokensStatus, changeTokensErrors, toggleTokensLoading, refreshTokenWatch, putTokensRequest, deleteTokensRequest } from './tokens'
import { POST_TOKENS_REQUEST, CHANGE_TOKENS_STATUS, CHANGE_TOKENS_ERRORS, TOGGLE_TOKENS_LOADING, REFRESH_TOKEN_WATCH, PUT_TOKENS_REQUEST, DELETE_TOKENS_REQUEST } from '../actionTypes/tokens'

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

  it('changeTokensError', () => {
    const key = 'key'
    const value = {}
    const expectedValue = {
      type: CHANGE_TOKENS_ERRORS,
      key,
      value
    }
    expect(changeTokensErrors(key)(value)).toEqual(expectedValue)
  })

  it('toggleTokensLoading', () => {
    const key = 'key'
    const expectedValue = {
      type: TOGGLE_TOKENS_LOADING,
      key,
      value: true
    }
    expect(toggleTokensLoading(key)(true)).toEqual(expectedValue)
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

  it('deleteTokensRequest', () => {
    const expectedValue = {
      type: DELETE_TOKENS_REQUEST
    }

    expect(deleteTokensRequest()).toEqual(expectedValue)
  })

  it('changeTokensStatus', () => {
    const value = 'Authorized'
    const expectedValue = {
      type: CHANGE_TOKENS_STATUS,
      key: 'status',
      value
    }

    expect(changeTokensStatus(value)).toEqual(expectedValue)
  })
})
