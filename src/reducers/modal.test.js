
import modal from './modal'
import { changeModal } from '../actions/modal'

describe('modal reducer', () => {
  const initialState = {
    createProject: {
      show: false
    },
    editProfile: {
      show: false
    },
    editProject: {
      show: false
    },
    changeAvatar: {
      show: false
    },
    changePassword: {
      show: false
    },
    editProjectMembers: {
      show: false
    }
  }
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
