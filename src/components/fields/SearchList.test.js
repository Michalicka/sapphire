
import React from 'react'
import SearchList from './SearchList'
import { shallow } from 'enzyme'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'

describe('SearchList component', () => {
  const props = {
    items: [
      {
        id: 1,
        name: 'member',
        email: 'member@email.com',
        avatar: 'https://www.google.com/'
      },
      {
        id: 2,
        name: 'member2',
        email: 'member2@email.com',
        avatar: 'https://www.google.com/'
      },
      {
        id: 3,
        name: 'member3',
        email: 'member3@email.com',
        avatar: 'https://www.google.com/'
      }
    ],
    selectedItems: [
      {
        id: 2,
        name: 'member2',
        email: 'member2@email.com',
        avatar: 'https://www.google.com/'
      }
    ],
    className: '',
    value: 'value',
    handleClick: jest.fn(),
    focus: true
  }

  it('should render items when items length is not 0 and value is not empty string', () => {
    const wrapper = shallow(<SearchList {...props} />)
    const listItem = wrapper.find(List).dive().find(ListItem)

    expect(listItem.length).toBe(props.items.length)
    props.items.forEach((item, index) => {
      const listItemTextProps = listItem.at(index).dive().find(ListItemText).props()
      expect(listItemTextProps.primary).toBe(item.name)
    })
  })

  it('should render selectedItems when items length is 0', () => {
    const newProps = { ...props, value: '' }
    const wrapper = shallow(<SearchList {...newProps} />)
    const listItem = wrapper.find(List).dive().find(ListItem)

    expect(listItem.length).toBe(props.selectedItems.length)
    newProps.selectedItems.forEach((item, index) => {
      const listItemTextProps = listItem.at(index).dive().find(ListItemText).props()
      expect(listItemTextProps.primary).toBe(item.name)
    })
  })

  it('should call handleClick on listItem click', () => {
    const wrapper = shallow(<SearchList {...props} />)
    const listItem = wrapper.find(List).dive().find(ListItem)

    listItem.at(0).props().onClick()

    expect(props.handleClick.mock.calls[0][0]).toBe(props.items[0].id)
  })

  it('shoudl be selected true if the item is in selectedItems', () => {
    const wrapper = shallow(<SearchList {...props} />)
    const listItem = wrapper.find(List).dive().find(ListItem)

    expect(listItem.at(1).dive().exists(ListItemIcon)).toBe(true)
  })
})
