
import { PostProject, PutProjectMembers } from './projects'

describe('projects validation', () => {
  describe('PostProject validation', () => {
    it('should be valid PostProject validation', done => {
      const validValues = {
        name: 'name',
        description: ''
      }

      PostProject.isValid(validValues)
        .then(isValid => {
          expect(isValid).toBe(true)
          done()
        })
    })

    it('should be invalid PostProject validation', done => {
      const invalidValues = {
        name: '',
        description: ''
      }

      PostProject.isValid(invalidValues)
        .then(isValid => {
          expect(isValid).toBe(false)
          done()
        })
    })
  })

  describe('PutProjectMembers validation', () => {
    it('should be valid PutProjectMembers validation', done => {
      const validValues = {
        members: [1, 2]
      }

      PutProjectMembers.isValid(validValues)
        .then(isValid => {
          expect(isValid).toBe(true)
          done()
        })
    })

    it('should be invalid PutProjectMembers validation', done => {
      const invalidValues = {
        members: ''
      }

      PutProjectMembers.isValid(invalidValues)
        .then(isValid => {
          expect(isValid).toBe(false)
          done()
        })
    })
  })
})
