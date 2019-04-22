
import { changeUserData, changeUserParam } from '../actions/user'
import user from './user'

describe('user reducer', () => {
  const state = {
    id: 1,
    name: 'name',
    email: 'name@email.com',
    image: 'https://www.google.com/'
  }

  it('change user data', () => {
    expect(user(undefined, changeUserData(state))).toEqual(state)
  })

  it('change user param', () => {
    const key = 'name'
    const value = 'john'
    const newState = { ...state, [key]: value }
    expect(user(state, changeUserParam(key, value))).toEqual(newState)
  })
})
