
import React from 'react'
import { shallow } from 'enzyme'
import CardContainer from './CardContainer'
import CardItem from './CardItem'
import CircularProgress from '@material-ui/core/CircularProgress'

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
    wrapper = shallow(<CardContainer items={items} options={[]} getItems={getItems} loading={false} baseUrl="/tasks/:id" />).dive()
  })

  it('should render expected count of items', () => {
    const cardItems = wrapper.dive().find(CardItem)
    expect(cardItems.length).toBe(2)
  })

  it('should show loader when loading prop is true', () => {
    const wrapper = shallow(<CardContainer items={[]} options={[]} getItems={jest.fn()} loading={true} baseUrl="/tasks/:id" />).dive()

    expect(wrapper.exists(CircularProgress)).toBe(true)
  })
})
