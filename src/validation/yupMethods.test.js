
import { fileType } from './yupMethods'

describe('yup methods', () => {
  let yupMock

  beforeEach(() => {
    yupMock = {
      test: jest.fn()
    }
  })

  describe('fileType', () => {
    let fileTypeMethod
    const acceptsTypes = ['jpeg']
    const message = 'ęrror'

    beforeEach(() => {
      fileTypeMethod = fileType.bind(yupMock, acceptsTypes, message)
    })

    it('should call yupMock test function with expected arguments', () => {
      fileTypeMethod()
      const expectedArgumentObject = {
        name: 'fileType',
        exclusive: false,
        message
      }

      expect(yupMock.test.mock.calls.length).toBe(1)

      const argumentObject = yupMock.test.mock.calls[0][0]

      expect(argumentObject.name).toBe(expectedArgumentObject.name)
      expect(argumentObject.exclusive).toBe(expectedArgumentObject.exclusive)
      expect(argumentObject.message).toBe(expectedArgumentObject.message)
    })

    it('should return validation success', () => {
      const validImage = 'data:image/jpeg;base64'
      fileTypeMethod()
      const testFunction = yupMock.test.mock.calls[0][0].test

      expect(testFunction(validImage)).toBe(true)
    })

    it('should return validation error', () => {
      const invalidImage = 'image'
      fileTypeMethod()
      const testFunction = yupMock.test.mock.calls[0][0].test

      expect(testFunction(invalidImage)).toBe(false)
    })
  })
})
