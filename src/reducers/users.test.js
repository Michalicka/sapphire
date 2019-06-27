
import users from './users'
import { changeUsersData, changeUsersErrors, toggleUsersLoading } from '../actions/users'
import { getDefaultValues } from './utils'

describe('users reducer', () => {
  const usersDefault = getDefaultValues(['getUsers'])
  const initialState = {
    loading: usersDefault(false),
    errors: usersDefault({}),
    data: []
  }

  it('should return initial state', () => {
    expect(users(undefined, {})).toEqual(initialState)
  })

  it('should return state after changeUsersData action', () => {
    const data = [
      {
        id: 1,
        name: 'user',
        email: 'user@user.com',
        avatar: 'https://www.google.com/'
      }
    ]
    const expectedState = { ...initialState, data }

    expect(users(undefined, changeUsersData(data))).toEqual(expectedState)
  })

  it('should return expected state after changeUsersErrors action', () => {
    const value = {
      name: 'error'
    }
    const key = 'getUsers'
    const errors = { ...initialState.errors, [key]: value }
    const expectedState = { ...initialState, errors }

    expect(users(undefined, changeUsersErrors(key)(value))).toEqual(expectedState)
  })

  it('should return expected state after toggleUsersLoading action', () => {
    const value = true
    const key = 'getUsers'
    const loading = { ...initialState.loading, [key]: value }
    const expectedState = { ...initialState, loading }

    expect(users(undefined, toggleUsersLoading(key)(value))).toEqual(expectedState)
  })
})
