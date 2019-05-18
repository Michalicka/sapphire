
import React from 'react'
import { shallow } from 'enzyme'
import CardContainer from './CardContainer'
import CardItem from './CardItem'

describe('Card container component', () => {
  let wrapper
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
  let getItems

  beforeEach(() => {
    getItems = jest.fn()
    wrapper = shallow(<CardContainer items={items} options={[]} getItems={getItems} />)
  })

  it('should render expected count of items', () => {
    const cardItems = wrapper.dive().find(CardItem)
    expect(cardItems.length).toBe(2)
  })

  it('should call getItems props', () => {
    expect(getItems.mock.calls.length).toBe(1)
  })
})
