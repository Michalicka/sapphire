
import React from 'react'
import { shallow } from 'enzyme'
import Search from './Search'
import TextField from '@material-ui/core/TextField'
import SearchList from './SearchList'

describe('Search component', () => {
  let props
  let wrapper
  beforeEach(() => {
    props = {
      name: 'search',
      label: 'search',
      setFieldValue: jest.fn(),
      setFieldTouched: jest.fn(),
      getItems: jest.fn(),
      getNewItems: jest.fn(),
      id: 1,
      loading: false,
      error: false,
      helperText: '',
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
      ]
    }
    wrapper = shallow(<Search {...props} />).dive()
  })

  it('should render component properly', () => {
    const textFieldProps = wrapper.find(TextField).props()
    const searchListProps = wrapper.find(SearchList).props()

    expect(textFieldProps.label).toBe(props.label)
    expect(textFieldProps.error).toBe(props.error)
    expect(textFieldProps.helperText).toBe(props.helperText)
    expect(searchListProps.items).toBe(props.items)
    expect(searchListProps.selectedItems).toEqual(props.selectedItems)
  })

  it('should call setFieldValue and setFieldTouched on setValue method', () => {
    wrapper.instance().setValue()

    expect(props.setFieldValue.mock.calls[0][0]).toBe(props.name)
    expect(props.setFieldValue.mock.calls[0][1]).toEqual(props.selectedItems.map(item => item.id))
    expect(props.setFieldTouched.mock.calls[0][0]).toBe(props.name)
    expect(props.setFieldTouched.mock.calls[0][1]).toBe(true)
  })

  it('should call change focus onFocus the TextField', () => {
    const textField = wrapper.find(TextField)

    expect(wrapper.state('focus')).toBe(false)

    textField.props().onFocus()

    expect(wrapper.state('focus')).toBe(true)

    textField.props().onBlur()

    expect(wrapper.state('focus')).toBe(false)
  })

  it('should change state and call setValue on handleChange method and add item', () => {
    wrapper.setState({ itemsLoaded: true }, () => {
      wrapper.update()
      wrapper.instance().handleChange(1)

      expect(wrapper.state('items')).toEqual([...props.selectedItems, props.items[0]])
      expect(props.setFieldValue.mock.calls.length).toBe(1)
      expect(props.setFieldTouched.mock.calls.length).toBe(1)
    })
  })

  it('should change state and call setValue on handleChange method and remove item', () => {
    wrapper.setState({ itemsLoaded: true }, () => {
      wrapper.instance().handleChange(2)

      expect(wrapper.state('items')).toEqual([])
      expect(props.setFieldValue.mock.calls.length).toBe(1)
      expect(props.setFieldTouched.mock.calls.length).toBe(1)
    })
  })

  it('should call getItems on mount', () => {
    expect(props.getItems.mock.calls[0][0]).toBe(props.id)
  })

  it('should update state on props change', () => {
    const newItems = [...props.selectedItems, props.items[0]]
    wrapper.setProps({ selectedItems: newItems })
    wrapper.update()

    expect(wrapper.state('itemsLoaded')).toBe(true)
    expect(wrapper.state('items')).toEqual(newItems)
  })
})
