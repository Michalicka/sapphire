
import React from 'react'
import { shallow } from 'enzyme'
import MoreButton from './MoreButton'
import { MenuItem, Menu } from '@material-ui/core'

describe('MoreButton', () => {
  let wrapper
  let props

  beforeEach(() => {
    props = {
      anchorEl: {},
      handleClose: jest.fn(),
      handleOpen: jest.fn(),
      itemClick: jest.fn(),
      options: [
        {
          title: 'option1',
          clickHandler: 1
        },
        {
          title: 'option2',
          clickHandler: 1
        }
      ]
    }
    wrapper = shallow(<MoreButton {...props} />)
  })
  it('should render expected count of menu items', () => {
    const items = wrapper.find(Menu).dive().find(MenuItem)
    expect(items.length).toBe(props.options.length)
  })

  it('should call clickHandler', () => {
    const item = wrapper.find(Menu).dive().find(MenuItem).at(0)
    item.props().onClick()
    expect(props.itemClick.mock.calls[0][0]).toBe(props.options[0].clickHandler)
  })
})
