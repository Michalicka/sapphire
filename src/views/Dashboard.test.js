
import React from 'react'
import { shallow } from 'enzyme'
import { Dashboard, mapDispatchToProps, mapStateToProps } from './Dashboard'
import { refreshTokenWatch } from '../actions/tokens'
import { getMeRequest } from '../actions/user'

describe('dasboard view', () => {
  it('should call refreshTokenWatch and getMe on mounted', () => {
    const refreshTokenWatch = jest.fn()
    const getMe = jest.fn()

    shallow(<Dashboard classes={{}} match={{}} refreshTokenWatch={refreshTokenWatch} getMe={getMe} />)
    expect(refreshTokenWatch.mock.calls.length).toBe(1)
    expect(getMe.mock.calls.length).toBe(1)
  })

  it('should return mapped state props', () => {
    const state = {
      tokens: {
        status: 'Authorized'
      }
    }
    const mappedProps = mapStateToProps(state)
    expect(mappedProps.status).toBe(state.tokens.status)
  })

  it('should return mapped action props', () => {
    const dispatch = jest.fn()
    const mappedActions = mapDispatchToProps(dispatch)

    mappedActions.getMe()
    expect(dispatch.mock.calls[0][0]).toEqual(getMeRequest())

    mappedActions.refreshTokenWatch()
    expect(dispatch.mock.calls[1][0]).toEqual(refreshTokenWatch())
  })
})
