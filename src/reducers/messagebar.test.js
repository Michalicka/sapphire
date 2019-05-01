
import messagebar from './messagebar'
import { changeMessagebarData } from '../actions/messagebar'

describe('messagebar reducer', () => {
  it('initial state', () => {
    const expectedValue = {
      open: false,
      message: '',
      variant: 'info'
    }
    expect(messagebar(undefined, {})).toEqual(expectedValue)
  })

  it('changeMessagebarData', () => {
    const expectedValue = {
      open: true,
      message: 'message',
      variant: 'success'
    }
    expect(messagebar(undefined, changeMessagebarData(expectedValue))).toEqual(expectedValue)
  })
})
