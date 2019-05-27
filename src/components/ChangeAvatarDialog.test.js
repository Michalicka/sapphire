
import React from 'react'
import { shallow } from 'enzyme'
import ChangeAvatarDialog from './ChangeAvatarDialog'

describe('ChangeAvatar component', () => {
  let wrapper
  const props = {
    send: jest.fn(),
    open: true,
    handleClose: jest.fn(),
    errors: {},
    loading: false,
    changeErrors: jest.fn()
  }
  beforeEach(() => {
    wrapper = shallow(<ChangeAvatarDialog {...props} />)
  })

  it('should call handleClose and changeErrors on handleClose props call', () => {
    wrapper.props().handleClose()
    expect(props.handleClose.mock.calls.length).toBe(1)
    expect(props.changeErrors.mock.calls.length).toBe(1)
  })

  it('should call end with values and url params', () => {
    const values = {
      photo: ''
    }
    wrapper.props().send(values)

    expect(props.send.mock.calls.length).toBe(1)
    expect(props.send.mock.calls[0][0]).toEqual(values)
  })
})
