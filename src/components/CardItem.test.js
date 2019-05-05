
import React from 'react'
import { shallow } from 'enzyme'
import CardItem from './CardItem'
import CardHeader from '@material-ui/core/CardHeader'
import Typography from '@material-ui/core/Typography'

describe('CardItem component', () => {
  const item = {
    id: 0,
    title: 'Title',
    description: 'Description'
  }
  it('should render data properly', () => {
    const wrapper = shallow(<CardItem item={item} options={[]} />)
    const header = wrapper.find(CardHeader)
    expect(header.props().title).toBe(item.title)
    const content = wrapper.find(Typography)
    expect(content.props().children).toBe(item.description)
  })
})
