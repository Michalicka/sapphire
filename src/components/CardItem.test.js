
import React from 'react'
import { shallow } from 'enzyme'
import { CardItem } from './CardItem'
import CardHeader from '@material-ui/core/CardHeader'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import CardContent from '@material-ui/core/CardContent'

describe('CardItem component', () => {
  let props
  let wrapper

  beforeEach(() => {
    props = {
      item: {
        id: 0,
        name: 'Title',
        description: 'Description'
      },
      baseUrl: '/items/:id',
      history: {
        push: jest.fn()
      },
      options: []
    }

    wrapper = shallow(<CardItem {...props} />).dive()
  })

  it('should render the component properly', () => {
    const cardHeaderProps = wrapper.find(CardHeader).props()
    const typographyProps = wrapper.find(CardContent).dive().find(Typography).props()

    expect(cardHeaderProps.title).toBe(props.item.name)
    expect(typographyProps.children).toBe(props.item.description)
  })

  it('should call props.history.push with expected params', () => {
    wrapper.find(CardActions).dive().find(Button).props().onClick()

    expect(props.history.push.mock.calls[0][0]).toBe(props.baseUrl.replace(':id', props.item.id))
  })
})
