
import { changeMessagebarData } from './messagebar'
import { CHANGE_MESSAGEBAR_DATA } from '../actionTypes/messagebar'

describe('messagebar actions', () => {
  it('changeMessagebarData', () => {
    const payload = {
      open: true,
      message: 'message',
      variant: 'success'
    }
    const expectedValue = {
      type: CHANGE_MESSAGEBAR_DATA,
      payload
    }
    expect(changeMessagebarData(payload)).toEqual(expectedValue)
  })
})
