
import { PostTasks } from './tasks'

describe('tasks validation', () => {
  describe('PostTasks', () => {
    it('should be valid PostTasks validation', done => {
      const validData = {
        title: 'task',
        term: '2018-05-06 8:00:00',
        assignee_id: 1,
        status_id: 1,
        duration: '3:30:00'
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
        assignee_id: null,
        status_id: null,
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
