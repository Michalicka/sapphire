
import { LocalStorageMock } from './testUtils'

describe('test utils', () => {
  describe('localStorage', () => {
    window.localStorage = new LocalStorageMock()
    const key = 'key'
    const value = 'value'
    beforeEach(() => {
      localStorage.clear()
    })
    it('should return right item after setItem', () => {
      localStorage.setItem(key, value)
      expect(localStorage.getItem(key)).toBe(value)
    })

    it('should return null value if key does not exist', () => {
      expect(localStorage.getItem('key')).toBe(null)
    })

    it('should clear localStorage', () => {
      const key2 = 'key2'
      localStorage.setItem(key, value)
      localStorage.setItem(key2, value)
      expect(localStorage.getItem(key)).toBe(value)
      expect(localStorage.getItem(key2)).toBe(value)
      localStorage.clear()
      expect(localStorage.getItem(key)).toBe(null)
      expect(localStorage.getItem(key2)).toBe(null)
    })

    it('should removeItem from localStorage', () => {
      localStorage.setItem(key, value)
      expect(localStorage.getItem(key)).toBe(value)
      localStorage.removeItem(key)
      expect(localStorage.getItem(key)).toBe(null)
    })
  })
})
