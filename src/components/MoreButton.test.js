
import React from 'react'
import { createShallow } from '@material-ui/core/test-utils'
import MoreButton from './MoreButton'
import MenuItem from '@material-ui/core/MenuItem'

describe('MoreButton', () => {
  const clickHandler = jest.fn()
  const options = [{
    key: 1,
    title: 'Title',
    clickHandler
  }]
  const wrapper = createShallow()(<MoreButton options={options} />)
  it('should render expected count of menu items', () => {
    const items = wrapper.dive().find(MenuItem)
    expect(items.length).toBe(1)
  })

  it('should call clickHandler', () => {
    const item = wrapper.dive().find(MenuItem)
    item.simulate('click')
    expect(clickHandler.mock.calls.length).toBe(1)
  })
})
