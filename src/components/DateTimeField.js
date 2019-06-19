
import React from 'react'
import PropTypes from 'prop-types'
import { DateTimePicker } from 'material-ui-pickers'
import DateFnsUtils from '@date-io/date-fns'

const DateTimeField = ({ setFieldValue, setFieldError, setFieldTouched, name, value, error, helperText, label }) => {
  const DateFormatter = new DateFnsUtils()
  const formatDate = date => DateFormatter.format(new Date(date), 'yyyy-MM-dd HH:mm:ss')

  const setValue = date => {
    setFieldValue(name, formatDate(date), true)
    setFieldTouched(name, true)
  }

  return (
    <DateTimePicker
      ampm={false}
      name={name}
      value={value}
      error={error}
      helperText={helperText}
      onChange={date => setValue(date)}
      onError={(_, error) => setFieldError(name, error)}
      fullWidth
      label={label}
    />
  )
}

DateTimeField.propTypes = {
  setFieldValue: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  setFieldError: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.bool.isRequired,
  helperText: PropTypes.string.isRequired,
  label: PropTypes.string
}

export default DateTimeField
