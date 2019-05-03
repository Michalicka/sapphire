
import { PostTokens } from './tokens'

describe('users validation', () => {
  describe('Login', () => {
    it('should be valid Login validation', done => {
      const validValues = {
        email: 'john@doe.com',
        password: 'password'
      }
      PostTokens.isValid(validValues)
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
      PostTokens.isValid(unvalidValues)
        .then(isValid => {
          expect(isValid).toBeFalsy()
          done()
        })
    })
  })
})
