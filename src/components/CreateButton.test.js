
import React from 'react'
import { shallow } from 'enzyme'
import CreateButton from './CreateButton'
import Fab from '@material-ui/core/Fab'

describe('CreateButton component', () => {
  let wrapper
  const clickHandler = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<CreateButton clickHandler={clickHandler} />).dive()
  })

  it('should call clickHandler on button click', () => {
    const fab = wrapper.find(Fab)

    fab.simulate('click')

    expect(clickHandler.mock.calls.length).toBe(1)
  })
})
