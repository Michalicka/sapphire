
import React from 'react'
import Counter from './Counter'
import { shallow } from 'enzyme'

describe('Counter component', () => {
  it('count text should be 0', () => {
    const wrapper = shallow(<Counter count={0} increment={jest.fn()} decrement={jest.fn()} />)
    const counterText = wrapper.find('#counter-text')
    expect(counterText.dive().dive().text()).toBe('0')
  })
  it('increment should be called', () => {
    const increment = jest.fn()
    const wrapper = shallow(<Counter count={0} increment={increment} decrement={jest.fn()} />)
    const incrementButton = wrapper.find('#increment-button')
    incrementButton.simulate('click')
    expect(increment.mock.calls.length).toBe(1)
  })
  it('decrement should be called', () => {
    const decrement = jest.fn()
    const wrapper = shallow(<Counter count={0} increment={jest.fn()} decrement={decrement} />)
    const decrementButton = wrapper.find('#decrement-button')
    decrementButton.simulate('click')
    expect(decrement.mock.calls.length).toBe(1)
  })
})
