
import React from 'react'
import { Counter } from './Counter'
import { shallow } from 'enzyme'

describe('counter component', () => {
  const decrement = jest.fn()
  const increment = jest.fn()
  const wrapper = shallow(
    <Counter
      decrement={decrement}
      increment={increment}
      count={0}
    />
  )
  it('count value should be 0', () => {
    const countSpan = wrapper.find('#count-span')
    expect(countSpan.text()).toBe('0')
  })

  it('increment is call after click', () => {
    const incrementButton = wrapper.find('#increment-button')
    incrementButton.simulate('click')
    expect(increment.mock.calls.length).toBe(1)
  })

  it('decrement is call after click', () => {
    const decrementButton = wrapper.find('#decrement-button')
    decrementButton.simulate('click')
    expect(decrement.mock.calls.length).toBe(1)
  })
})
