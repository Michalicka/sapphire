
import types from '../actionTypes/counter'
import counter from './counter'

describe('counter actions', () => {
  it('should create increment action', () => {
    const expectedAction = { type: types.INCREMENT }
    expect(counter.increment()).toEqual(expectedAction)
  })
  it('should create decrement action', () => {
    const expectedAction = { type: types.DECREMENT }
    expect(counter.decrement()).toEqual(expectedAction)
  })
})
