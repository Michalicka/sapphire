
import { PostUsers } from './users'

describe('users validation', () => {
  it('should be valid PostUsers validation', done => {
    const validValues = {
      displayName: 'john',
      email: 'john@doe.com',
      password: 'password'
    }
    PostUsers.isValid(validValues)
      .then(isValid => {
        expect(isValid).toBeTruthy()
        done()
      })
  })

  it('should not be valid PostUsers validation', done => {
    const unvalidValues = {
      displayName: '',
      email: '',
      password: ''
    }
    PostUsers.isValid(unvalidValues)
      .then(isValid => {
        expect(isValid).toBeFalsy()
        done()
      })
  })
})
