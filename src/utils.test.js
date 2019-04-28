
import { fieldProps } from './utils'

describe('utils test', () => {
  it('fieldProps should return expected value', () => {
    const formData = {
      values: {
        first_name: ''
      },
      handleChange: jest.fn(),
      handleBlur: jest.fn(),
      errors: {
        first_name: 'error'
      },
      touched: {
        first_name: true
      }
    }

    const requestErrors = {}
    const expectedValue = {
      name: 'first_name',
      label: 'First name',
      value: '',
      type: undefined,
      onChange: formData.handleChange,
      onBlur: formData.handleBlur,
      error: true,
      helperText: 'error',
      'data-test-id': 'field-first_name'
    }
    expect(fieldProps(formData, requestErrors)('first_name')).toEqual(expectedValue)
  })
})
