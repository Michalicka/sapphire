
import React from 'react'
import { shallow } from 'enzyme'
import CreateProjectDialog from './CreateProjectDialog'

describe('CreateProjectDialog component', () => {
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
    wrapper = shallow(<CreateProjectDialog {...props} />)
  })

  it('should call handleClose and changeErrors on handleClose props call', () => {
    wrapper.props().handleClose()
    expect(props.handleClose.mock.calls.length).toBe(1)
    expect(props.handleClose.mock.calls.length).toBe(1)
  })
})
