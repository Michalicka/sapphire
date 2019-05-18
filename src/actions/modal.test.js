
import { changeModal } from './modal'
import { CHANGE_MODAL } from '../actionTypes/modal'

describe('modal actions', () => {
  it('changeModal', () => {
    const value = 'modal'
    const expectedValue = {
      type: CHANGE_MODAL,
      value
    }

    expect(changeModal(value)).toEqual(expectedValue)
  })
})
