
import React from 'react'
import RegistrationForm from './RegistrationForm'
import { createShallow } from '@material-ui/core/test-utils'

describe('RegistrationForm component', () => {
  const defaultProps = {
    classes: {},
    registration: jest.fn(),
    userErrors: {},
    loading: false
  }
  const createWrapper = props => createShallow({ dive: true })(<RegistrationForm {...props} />).dive()

  it('should be no errors on start', () => {
    const wrapper = createWrapper(defaultProps)
    const name = wrapper.find('[data-test-id="field-name"]')
    const email = wrapper.find('[data-test-id="field-email"]')
    const password = wrapper.find('[data-test-id="field-password"]')
    const passwordConfirmation = wrapper.find('[data-test-id="field-password_confirmation"]')
    expect(name.props().helperText).toBe('')
    expect(email.props().helperText).toBe('')
    expect(password.props().helperText).toBe('')
    expect(passwordConfirmation.props().helperText).toBe('')
  })

  it('should be empty values on start', () => {
    const wrapper = createWrapper(defaultProps)
    const name = wrapper.find('[data-test-id="field-name"]')
    const email = wrapper.find('[data-test-id="field-email"]')
    const password = wrapper.find('[data-test-id="field-password"]')
    const passwordConfirmation = wrapper.find('[data-test-id="field-password_confirmation"]')
    expect(name.props().value).toBe('')
    expect(email.props().value).toBe('')
    expect(password.props().value).toBe('')
    expect(passwordConfirmation.props().value).toBe('')
  })

  it('should show error in helperText', () => {
    const error = 'error'
    const userErrors = {
      name: error,
      email: error,
      password: error,
      password_confirmation: error
    }
    const wrapper = createWrapper({ ...defaultProps, userErrors })
    const name = wrapper.find('[data-test-id="field-name"]')
    const email = wrapper.find('[data-test-id="field-email"]')
    const password = wrapper.find('[data-test-id="field-password"]')
    const passwordConfirmation = wrapper.find('[data-test-id="field-password_confirmation"]')
    expect(name.props().helperText).toBe(error)
    expect(email.props().helperText).toBe(error)
    expect(password.props().helperText).toBe(error)
    expect(passwordConfirmation.props().helperText).toBe(error)
  })

  it('should call registration on submit form', () => {
    const registration = jest.fn()
    const props = {
      ...defaultProps,
      registration: undefined
    }
    const wrapper = createShallow({ dive: true })(<RegistrationForm {...props} registration={registration} />)
    wrapper.props().onSubmit()
    expect(registration.mock.calls.length).toBe(1)
  })
})
