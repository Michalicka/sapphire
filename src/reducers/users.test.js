
import users from './users'
import { changeUsersData, changeUsersErrors, toggleUsersLoading } from '../actions/users'

describe('users reducer', () => {
  const initialState = {
    loading: false,
    errors: {},
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
    const newState = { ...initialState, data }

    expect(users(undefined, changeUsersData(data))).toEqual(newState)
  })

  it('should return expected state after changeUsersErrors action', () => {
    const errors = {
      name: 'error'
    }
    const newState = { ...initialState, errors }

    expect(users(undefined, changeUsersErrors(errors))).toEqual(newState)
  })

  it('should return expected state after toggleUsersLoading action', () => {
    const loading = true
    const newState = { ...initialState, loading }

    expect(users(undefined, toggleUsersLoading(loading))).toEqual(newState)
  })
})
