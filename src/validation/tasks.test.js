
import { PostTasks } from './tasks'

describe('tasks validation', () => {
  describe('PostTasks', () => {
    it('should be valid PostTasks validation', done => {
      const validData = {
        title: 'title',
        term: '2019-05-30 12:30:15',
        description: 'description',
        duration: '12:00:00'
      }

      PostTasks.isValid(validData)
        .then(isValid => {
          expect(isValid).toBe(true)
          done()
        })
    })

    it('should be invalid PostTasks validation', done => {
      const invalidData = {
        title: '',
        term: '',
        description: '',
        duration: ''
      }

      PostTasks.isValid(invalidData)
        .then(isValid => {
          expect(isValid).toBe(false)
          done()
        })
    })
  })
})
