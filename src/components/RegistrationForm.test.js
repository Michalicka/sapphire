
import React from 'react'
import RegistrationForm from './RegistrationForm'
import { createShallow } from '@material-ui/core/test-utils'

describe('RegistrationForm component', () => {
  let shallow
  beforeEach(() => {
    shallow = createShallow({ dive: true })
  })

  it('should be no errors on start', () => {
    const wrapper = shallow(<RegistrationForm />).dive()
    const displayName = wrapper.find('#displayName')
    const email = wrapper.find('#email')
    const password = wrapper.find('#password')
    expect(displayName.props().helperText).toBe('')
    expect(email.props().helperText).toBe('')
    expect(password.props().helperText).toBe('')
  })

  it('should be empty values on start', () => {
    const wrapper = shallow(<RegistrationForm />).dive()
    const displayName = wrapper.find('#displayName')
    const email = wrapper.find('#email')
    const password = wrapper.find('#password')
    expect(displayName.props().value).toBe('')
    expect(email.props().value).toBe('')
    expect(password.props().value).toBe('')
  })
})
