
import React from 'react'
import { shallow } from 'enzyme'
import { Dashboard, mapDispatchToProps, mapStateToProps } from './Dashboard'
import { refreshTokenWatch } from '../actions/tokens'
import { getMeRequest } from '../actions/profile'
import { getProjectsRequest } from '../actions/projects'

describe('dasboard view', () => {
  let props

  beforeEach(() => {
    localStorage.setItem('accessToken', 'token')

    props = {
      classes: {},
      match: {},
      refreshTokenWatch: jest.fn(),
      getMe: jest.fn(),
      getProjects: jest.fn(),
      openChat: jest.fn()
    }
    shallow(<Dashboard {...props} />)
  })

  afterEach(() => {
    localStorage.clear()
  })

  it('should return mapped state props', () => {
    const state = {
      tokens: {
        data: {
          status: 'Authorized'
        }
      }
    }
    const mappedProps = mapStateToProps(state)
    expect(mappedProps.status).toBe(state.tokens.data.status)
  })

  it('should return mapped action props', () => {
    const dispatch = jest.fn()
    const mappedActions = mapDispatchToProps(dispatch)

    mappedActions.getMe()
    mappedActions.getProjects()
    mappedActions.refreshTokenWatch()

    expect(dispatch.mock.calls[0][0]).toEqual(getMeRequest())
    expect(dispatch.mock.calls[1][0]).toEqual(getProjectsRequest())
    expect(dispatch.mock.calls[2][0]).toEqual(refreshTokenWatch())
  })
})
