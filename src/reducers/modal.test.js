
import modal from './modal'
import { changeModal } from '../actions/modal'
import { getDefaultValues } from './utils'

describe('modal reducer', () => {
  const initialState = getDefaultValues([
    'createProject',
    'editProfile',
    'editProject',
    'changeAvatar',
    'changePassword',
    'changePassword',
    'editProjectMembers',
    'createTask',
    'editTask',
    'chat'
  ])({ show: false })
  it('should return initialState', () => {
    expect(modal(undefined, {})).toEqual(initialState)
  })

  it('should return expected state after changeModal action', () => {
    const key = 'createProject'
    const data = {
      show: true
    }
    const newState = { ...initialState, [key]: data }

    expect(modal(undefined, changeModal(key, data))).toEqual(newState)
  })

  it('should return expected state after changeModal action without data arg', () => {
    const key = 'createProject'
    const state = { ...initialState, [key]: { show: true } }

    expect(modal(state, changeModal(key))).toEqual(initialState)
  })
})
