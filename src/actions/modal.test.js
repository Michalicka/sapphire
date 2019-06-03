
import { changeModal } from './modal'
import { CHANGE_MODAL } from '../actionTypes/modal'

describe('modal actions', () => {
  it('changeModal', () => {
    const key = 'modal'
    const data = {
      show: true
    }
    const expectedValue = {
      type: CHANGE_MODAL,
      key,
      data
    }

    expect(changeModal(key, data)).toEqual(expectedValue)
  })
})
