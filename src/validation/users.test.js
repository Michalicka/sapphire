
import { PostUsers, Login } from './users'

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
  describe('Login', () => {
    it('should be valid Login validation', done => {
      const validValues = {
        email: 'john@doe.com',
        password: 'password'
      }
      Login.isValid(validValues)
        .then(isValid => {
          expect(isValid).toBeTruthy()
          done()
        })
    })
    it('should not be valid Login validation', done => {
      const unvalidValues = {
        email: '',
        password: ''
      }
      Login.isValid(unvalidValues)
        .then(isValid => {
          expect(isValid).toBeFalsy()
          done()
        })
    })
  })
})
