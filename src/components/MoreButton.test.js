
import React from 'react'
import { shallow } from 'enzyme'
import MoreButton from './MoreButton'
import MenuItem from '@material-ui/core/MenuItem'

describe('MoreButton', () => {
  const clickHandler = jest.fn()
  const options = [{
    key: 1,
    title: 'Title',
    clickHandler
  }]
  const wrapper = shallow(<MoreButton options={options} />)
  it('should render expected count of menu items', () => {
    const items = wrapper.find(MenuItem)
    expect(items.length).toBe(1)
  })

  it('should call clickHandler', () => {
    const item = wrapper.find(MenuItem)
    item.simulate('click')
    expect(clickHandler.mock.calls.length).toBe(1)
  })
})
