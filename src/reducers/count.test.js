
import actions from '../actions/counter'
import count from './count'

describe('count reducer', () => {
  it('should return initial state', () => {
    expect(count(undefined, {})).toBe(0)
  })

  it('should return state incremented by 1', () => {
    expect(count(undefined, actions.increment())).toBe(1)
  })

  it('should return state decremented by 1', () => {
    expect(count(undefined, actions.decrement())).toBe(-1)
  })
})
