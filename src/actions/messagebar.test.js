
import { changeMessagebarParam } from './messagebar'
import { CHANGE_MESSAGEBAR_PARAM } from '../actionTypes/messagebar'

describe('messagebar actions', () => {
  it('changeMessagebarParam', () => {
    const key = 'key'
    const value = 'value'
    const expectedValue = {
      type: CHANGE_MESSAGEBAR_PARAM,
      key,
      value
    }
    expect(changeMessagebarParam(key, value)).toEqual(expectedValue)
  })
})
