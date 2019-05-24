
import { PostUsers, PutUsers } from './users'

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
          expect(isValid).toBe(true)
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
          expect(isValid).toBe(false)
          done()
        })
    })
  })

  describe('PutUsers', () => {
    it('should be valid PutUsers validation', done => {
      const validValues = {
        name: 'john',
        email: 'john@doe.com'
      }
      PutUsers.isValid(validValues)
        .then(isValid => {
          expect(isValid).toBe(true)
          done()
        })
    })

    it('should not be valid PutUsers validation', done => {
      const unvalidValues = {
        name: '',
        email: ''
      }
      PutUsers.isValid(unvalidValues)
        .then(isValid => {
          expect(isValid).toBe(false)
          done()
        })
    })
  })
})
