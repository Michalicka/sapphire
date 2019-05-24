
import { PostUsers, PutUsers, PutPasswords } from './users'

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
      const invalidValues = {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      }
      PostUsers.isValid(invalidValues)
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
      const invalidValues = {
        name: '',
        email: ''
      }
      PutUsers.isValid(invalidValues)
        .then(isValid => {
          expect(isValid).toBe(false)
          done()
        })
    })
  })

  describe('PutPasswotds', () => {
    it('should be valid PutUsers validation', done => {
      const validValues = {
        password: 'password',
        password_confirmation: 'password'
      }
      PutPasswords.isValid(validValues)
        .then(isValid => {
          expect(isValid).toBe(true)
          done()
        })
    })

    it('should not be valid PutUsers validation', done => {
      const invalidValues = {
        password: '',
        password_confirmation: ''
      }
      PutPasswords.isValid(invalidValues)
        .then(isValid => {
          expect(isValid).toBe(false)
          done()
        })
    })
  })
})
