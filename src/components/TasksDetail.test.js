
import React from 'react'
import { shallow } from 'enzyme'
import Typography from '@material-ui/core/Typography'
import TasksDetail from './TasksDetail'

describe('TasksDetail component', () => {
  it('should render the component properly', () => {
    const props = {
      title: 'Title',
      description: 'Description'
    }
    const wrapper = shallow(<TasksDetail {...props} />)
    const typography = wrapper.find(Typography)

    expect(typography.at(0).props().children).toBe(props.title)
    expect(typography.at(1).props().children).toBe(props.description)
  })
})
