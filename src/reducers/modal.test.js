
import modal from './modal'
import { changeModal } from '../actions/modal'

describe('modal reducer', () => {
  it('should return initialState', () => {
    expect(modal(undefined, {})).toBe('')
  })

  it('should return expected state after changeModal action', () => {
    const newValue = 'modal'
    expect(modal(undefined, changeModal(newValue))).toBe(newValue)
  })
})
