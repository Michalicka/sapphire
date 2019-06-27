
import React from 'react'
import PropTypes from 'prop-types'
import { TimePicker } from 'material-ui-pickers'

const TimeField = ({ setFieldError, name, value, error, helperText, label, className, setValue }) => {
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
      value={value}
      className={className}
    />
  )
}

TimeField.propTypes = {
  name: PropTypes.string.isRequired,
  setFieldError: PropTypes.func.isRequired,
  value: PropTypes.instanceOf(Date),
  error: PropTypes.bool.isRequired,
  helperText: PropTypes.string.isRequired,
  label: PropTypes.string,
  className: PropTypes.string,
  setValue: PropTypes.func.isRequired
}

export default TimeField
