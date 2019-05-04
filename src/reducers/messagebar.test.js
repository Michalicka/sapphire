
import messagebar from './messagebar'
import { changeMessagebarParam } from '../actions/messagebar'

describe('messagebar reducer', () => {
  it('initial state', () => {
    const expectedValue = {
      open: false,
      message: '',
      variant: 'info'
    }
    expect(messagebar(undefined, {})).toEqual(expectedValue)
  })

  it('changeMessagebarParam', () => {
    const expectedValue = {
      open: true,
      message: '',
      variant: 'info'
    }
    expect(messagebar(undefined, changeMessagebarParam('open', true))).toEqual(expectedValue)
  })
})
