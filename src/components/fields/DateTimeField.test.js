
import React from 'react'
import DateFnsUtils from '@date-io/date-fns'
import DateTimeField from './DateTimeField'
import { MuiPickersUtilsProvider, DateTimePicker } from 'material-ui-pickers'
import { shallow } from 'enzyme'

describe('DateTimeField', () => {
  let wrapper
  let props

  beforeEach(() => {
    props = {
      setFieldValue: jest.fn(),
      setFieldError: jest.fn(),
      setFieldTouched: jest.fn(),
      error: false,
      helperText: '',
      name: 'dateTimeField',
      label: 'dateTimeField'
    }
    wrapper = shallow(<MuiPickersUtilsProvider utils={DateFnsUtils}><DateTimeField {...props} /></MuiPickersUtilsProvider>)
  })

  it('should call setFieldValue and setFieldTouched on onChange call', () => {
    const date = new Date()
    const DateFormatter = new DateFnsUtils()
    const expectedDate = DateFormatter.format(date, 'yyyy-MM-dd HH:mm:ss')
    wrapper.dive().dive().find(DateTimePicker).props().onChange(date)
    const setValueCall = props.setFieldValue.mock.calls[0]
    const setTouchedCall = props.setFieldTouched.mock.calls[0]

    expect(setValueCall[0]).toBe(props.name)
    expect(setValueCall[1]).toBe(expectedDate)
    expect(setValueCall[2]).toBe(true)
    expect(setTouchedCall[0]).toBe(props.name)
    expect(setTouchedCall[1]).toBe(true)
  })

  it('should call setFieldError on onError call', () => {
    const error = 'error'
    wrapper.dive().dive().find(DateTimePicker).props().onError({}, error)
    const call = props.setFieldError.mock.calls[0]

    expect(call[0]).toBe(props.name)
    expect(call[1]).toBe(error)
  })
})
