
import React from 'react'
import { shallow } from 'enzyme'
import Search from './Search'
import TextField from '@material-ui/core/TextField'

describe('Search component', () => {
  let props
  let wrapper
  beforeEach(() => {
    props = {
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
      selectedItems: [],
      name: 'search',
      label: 'search',
      error: false,
      helperText: '',
      loading: false,
      id: 1,
      search: jest.fn(),
      changeSelectedItems: jest.fn()
    }
    wrapper = shallow(<Search {...props} />).dive()
  })

  it('should call search method on onChangeEvent', () => {
    const textfieldProps = wrapper.find(TextField).props()
    const event = {
      currentTarget: {
        value: 'value'
      }
    }
    textfieldProps.onChange(event)

    expect(props.search.mock.calls[0][0]).toBe(event.currentTarget.value)
  })
})
