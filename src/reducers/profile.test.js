
import { changeUserData, changeUserParam, changeUserErrors, toggleUserLoading, userRestore, mergeUserData } from '../actions/profile'
import { getDefaultValues } from './utils'
import profile from './profile'

describe('profile reducer', () => {
  const profileDefault = getDefaultValues(['getMe', 'postUsers', 'putUsers', 'postAvatars', 'putPasswords'])
  const initialState = {
    data: {
      id: null,
      name: '',
      email: '',
      avatar: ''
    },
    errors: profileDefault({}),
    loading: profileDefault(false)
  }

  it('defaul state', () => {
    expect(profile(undefined, {})).toEqual(initialState)
  })

  it('change user data', () => {
    const data = {
      id: 2,
      name: 'Jane Doe',
      email: 'jane@doe.com',
      avatar: ''
    }
    const newState = { ...initialState, data }
    expect(profile(undefined, changeUserData(data))).toEqual(newState)
  })

  it('change user param', () => {
    const key = 'name'
    const value = 'john'
    const data = { ...initialState.data, [key]: value }
    const newState = { ...initialState, data }
    expect(profile(undefined, changeUserParam(key, value))).toEqual(newState)
  })

  it('change user errors', () => {
    const errors = {
      name: 'error',
      email: 'error',
      password: 'error',
      password_confirmation: 'error'
    }
    const key = 'getMe'
    const newErrors = { ...initialState.errors, [key]: errors }
    const newState = { ...initialState, errors: newErrors }
    expect(profile(undefined, changeUserErrors(key)(errors))).toEqual(newState)
  })

  it('toggle user loading', () => {
    const key = 'getMe'
    const loading = { ...initialState.loading, [key]: true }
    const expectedValue = { ...initialState, loading }
    expect(profile(undefined, toggleUserLoading(key)(true))).toEqual(expectedValue)
  })

  it('should return expected state after userRestore action', () => {
    const state = { ...initialState, data: undefined }

    expect(profile(state, userRestore())).toEqual(initialState)
  })

  it('should return expected state after mergeUserData action', () => {
    const newData = {
      name: 'name',
      email: 'email@email.com'
    }
    const data = { ...initialState.data, ...newData }
    const expectedValue = { ...initialState, data }

    expect(profile(undefined, mergeUserData(newData))).toEqual(expectedValue)
  })
})
