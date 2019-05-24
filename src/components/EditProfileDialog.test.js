
import React from 'react'
import { shallow } from 'enzyme'
import EditProfileDialog from './EditProfileDialog'

describe('CreateProjectDialog component', () => {
  let wrapper
  const props = {
    send: jest.fn(),
    open: true,
    handleClose: jest.fn(),
    errors: {},
    loading: false,
    changeErrors: jest.fn(),
    id: 1,
    initialValues: {
      name: 'name',
      email: 'email'
    }
  }
  beforeEach(() => {
    wrapper = shallow(<EditProfileDialog {...props} />)
  })

  it('should call handleClose and changeErrors on handleClose props call', () => {
    wrapper.props().handleClose()
    expect(props.handleClose.mock.calls.length).toBe(1)
    expect(props.handleClose.mock.calls.length).toBe(1)
  })

  it('should call end with values and url params', () => {
    const values = {
      name: 'name',
      email: 'email'
    }
    wrapper.props().send(values)

    expect(props.send.mock.calls.length).toBe(1)
    expect(props.send.mock.calls[0][0]).toEqual(values)
    expect(props.send.mock.calls[0][1]).toEqual({ id: props.id })
  })
})
