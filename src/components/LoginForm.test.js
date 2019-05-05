
import React from 'react'
import LoginForm from './LoginForm'
import CircularProgress from '@material-ui/core/CircularProgress'
import { createShallow } from '@material-ui/core/test-utils'

describe('LoginForm component', () => {
  const defaultProps = {
    classes: {},
    login: jest.fn(),
    tokensErrors: {},
    loading: false
  }
  const createWrapper = props => createShallow({ dive: true })(<LoginForm {...props} />).dive()

  it('should be no errors on start', () => {
    const wrapper = createWrapper(defaultProps)
    const email = wrapper.find('[data-test-id="field-email"]')
    const password = wrapper.find('[data-test-id="field-password"]')
    expect(email.props().helperText).toBe('')
    expect(password.props().helperText).toBe('')
  })

  it('should be empty values on start', () => {
    const wrapper = createWrapper(defaultProps)
    const email = wrapper.find('[data-test-id="field-email"]')
    const password = wrapper.find('[data-test-id="field-password"]')
    expect(email.props().value).toBe('')
    expect(password.props().value).toBe('')
  })

  it('should show error in helperText', () => {
    const error = 'error'
    const tokensErrors = {
      email: error,
      password: error
    }
    const wrapper = createWrapper({ ...defaultProps, tokensErrors })
    const email = wrapper.find('[data-test-id="field-email"]')
    const password = wrapper.find('[data-test-id="field-password"]')
    expect(email.props().helperText).toBe(error)
    expect(password.props().helperText).toBe(error)
  })

  it('should show spinner when loading is true', () => {
    let wrapper = createShallow({ dive: true })(<LoginForm {...defaultProps} />)
    expect(wrapper.dive().exists(CircularProgress)).toBe(false)
    wrapper.setProps({ ...defaultProps, loading: true })
    expect(wrapper.dive().exists(CircularProgress)).toBe(true)
  })

  it('should call registration on submit form', () => {
    const login = jest.fn()
    const props = {
      ...defaultProps,
      registration: undefined
    }
    const wrapper = createShallow({ dive: true })(<LoginForm {...props} login={login} />)
    wrapper.props().onSubmit()
    expect(login.mock.calls.length).toBe(1)
  })
})
