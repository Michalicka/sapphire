
import { PostUsers } from './users'

describe('users validation', () => {
  describe('PostUsers', () => {
    it('should be valid PostUsers validation', done => {
      const validValues = {
        name: 'john',
        email: 'john@doe.com',
        password: 'password',
        password_confirmation: 'password'
      }
      PostUsers.isValid(validValues)
        .then(isValid => {
          expect(isValid).toBeTruthy()
          done()
        })
    })

    it('should not be valid PostUsers validation', done => {
      const unvalidValues = {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      }
      PostUsers.isValid(unvalidValues)
        .then(isValid => {
          expect(isValid).toBeFalsy()
          done()
        })
    })
  })
})
