
import React from 'react'
import { shallow } from 'enzyme'
import ChangePasswordDialog from './ChangePasswordDialog'

describe('ChangePasswordDialog component', () => {
  let wrapper
  const props = {
    send: jest.fn(),
    open: true,
    handleClose: jest.fn(),
    errors: {},
    loading: false,
    changeErrors: jest.fn(),
    id: 1
  }
  beforeEach(() => {
    wrapper = shallow(<ChangePasswordDialog {...props} />)
  })

  it('should call handleClose and changeErrors on handleClose props call', () => {
    wrapper.props().handleClose()
    expect(props.handleClose.mock.calls.length).toBe(1)
    expect(props.changeErrors.mock.calls.length).toBe(1)
  })

  it('should call end with values and url params', () => {
    const values = {
      password: 'password',
      password_confirmation: 'password'
    }
    wrapper.props().send(values)

    expect(props.send.mock.calls.length).toBe(1)
    expect(props.send.mock.calls[0][0]).toEqual(values)
  })
})
