
import React from 'react'
import SearchList from './SearchList'
import { shallow } from 'enzyme'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'

describe('SearchList component', () => {
  let wrapper
  let props

  beforeEach(() => {
    props = {
      items: [
        {
          id: 1,
          name: 'item1'
        },
        {
          id: 2,
          name: 'item1'
        },
        {
          id: 3,
          name: 'item1'
        }
      ],
      selectedItems: [
        {
          id: 1,
          name: 'item1'
        }
      ],
      handleClick: jest.fn()
    }
    wrapper = shallow(<SearchList {...props} />).dive()
  })

  it('should render expected count of items', () => {
    const listItems = wrapper.find(ListItem)

    expect(listItems.length).toBe(props.items.length)
  })

  it('should show ListItemIcon when items is in selectedItems', () => {
    const listItem = wrapper.find(ListItem).at(0).dive()

    expect(listItem.exists(ListItemIcon)).toBe(true)
  })

  it('should call handleClick on listItem click with item as a argument', () => {
    const listItemProps = wrapper.find(ListItem).at(0).props()
    listItemProps.onClick()

    expect(props.handleClick.mock.calls[0][0]).toEqual(props.items[0])
  })
})
