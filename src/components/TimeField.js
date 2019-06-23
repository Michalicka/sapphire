
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { TimePicker } from 'material-ui-pickers'
import DateFnsUtils from '@date-io/date-fns'

const TimeField = ({ setFieldValue, setFieldError, setFieldTouched, name, value, error, helperText, label, className }) => {
  const DateFormatter = new DateFnsUtils()
  const formatDate = time => DateFormatter.format(time, 'HH:mm:ss')
  const [localDate, setLocalDate] = useState(null)

  useEffect(() => {
    if (value) {
      const date = new Date()
      setValue(new Date(`${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${value}`))
    }
  }, [])

  const setValue = date => {
    setFieldValue(name, formatDate(date), true)
    setFieldTouched(name, true)
    setLocalDate(date)
  }

  return (
    <TimePicker
      ampm={false}
      name={name}
      error={error}
      helperText={helperText}
      onChange={date => setValue(date)}
      onError={(_, error) => setFieldError(name, error)}
      fullWidth
      label={label}
      value={localDate}
      className={className}
    />
  )
}

TimeField.propTypes = {
  setFieldValue: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  setFieldError: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.bool.isRequired,
  helperText: PropTypes.string.isRequired,
  label: PropTypes.string
}

export default TimeField
