
import React from 'react'
import SearchList from './SearchList'
import { shallow } from 'enzyme'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Fade from '@material-ui/core/Fade'

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
    handleClick: jest.fn(),
    focus: true,
  }

  it('should render items when items length is not 0', () => {
    const wrapper = shallow(<SearchList {...props} />).dive()
    const listItem = wrapper.find(List).dive().find(ListItem)

    expect(listItem.length).toBe(props.items.length)
    props.items.forEach((item, index) => {
      const avatarProps = listItem.at(index).dive().find(ListItemAvatar).dive().find(Avatar).props()
      const listItemTextProps = listItem.at(index).dive().find(ListItemText).props()
      // expect(listItem.at(index).props().key).toBe(item.id)
      expect(avatarProps.src).toBe(item.avatar)
      expect(avatarProps.alt).toBe(item.name)
      expect(listItemTextProps.primary).toBe(item.name)
      expect(listItemTextProps.secondary).toBe(item.email)
    })
  })

  it('should render selectedItems when items length is 0', () => {
    const items = []
    const newProps = { ...props, items }
    const wrapper = shallow(<SearchList {...newProps} />).dive()
    const listItem = wrapper.find(List).dive().find(ListItem)

    expect(listItem.length).toBe(newProps.selectedItems.length)
    newProps.selectedItems.forEach((item, index) => {
      const avatarProps = listItem.at(index).dive().find(ListItemAvatar).dive().find(Avatar).props()
      const listItemTextProps = listItem.at(index).dive().find(ListItemText).props()
      // expect(listItem.at(index).props().key).toBe(item.id)
      expect(avatarProps.src).toBe(item.avatar)
      expect(avatarProps.alt).toBe(item.name)
      expect(listItemTextProps.primary).toBe(item.name)
      expect(listItemTextProps.secondary).toBe(item.email)
    })
  })

  it('should call handleClick on listItem click', () => {
    const wrapper = shallow(<SearchList {...props} />).dive()
    const listItem = wrapper.find(List).dive().find(ListItem)

    listItem.at(0).props().onClick()

    expect(props.handleClick.mock.calls[0][0]).toBe(props.items[0].id)
  })

  it('shoudl be selected true if the item is in selectedItems', () => {
    const wrapper = shallow(<SearchList {...props} />).dive()
    const listItem = wrapper.find(List).dive().find(ListItem)

    expect(listItem.at(1).props().selected).toBe(true)
  })

  it('should be open when focus is true', () => {
    const wrapper = shallow(<SearchList {...props} />)
    const fade = wrapper.find(Fade)

    expect(fade.props().in).toBe(props.focus)
  })

  it('should not be open when focus is true, but items length is 0', () => {
    const items = []
    const selectedItems = []
    const newProps = { ...props, items, selectedItems }
    const wrapper = shallow(<SearchList {...newProps} />)
    const fade = wrapper.find(Fade)

    expect(fade.props().in).toBe(false)
  })
})
