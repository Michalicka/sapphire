
import React from 'react'
import { shallow } from 'enzyme'
import Tasks from '../views/Tasks'

describe('Tasks view', () => {
  it('should render properly', () => {
    shallow(<Tasks match={{ params: {} }} />)
  })
})
