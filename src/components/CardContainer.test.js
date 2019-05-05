
import React from 'react'
import { shallow } from 'enzyme'
import CardContainer from './CardContainer'
import CardItem from './CardItem'

describe('Card container component', () => {
  it('should render expected count of items', () => {
    const items = [
      {
        id: 1,
        title: 'Title',
        description: 'Description'
      },
      {
        id: 2,
        title: 'Title',
        description: 'Description'
      }
    ]
    const wrapper = shallow(<CardContainer items={items} options={[]} />)
    const cardItems = wrapper.dive().find(CardItem)
    expect(cardItems.length).toBe(2)
  })
})
