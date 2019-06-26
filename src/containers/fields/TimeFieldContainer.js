
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import DateFnsUtils from '@date-io/date-fns'
import TimeField from '../../components/fields/TimeField'

const TimeFieldContainer = ({ value, name, setFieldValue, setFieldTouched, ...others }) => {
  const DateFormatter = new DateFnsUtils()
  const formatDate = time => DateFormatter.format(time, 'HH:mm:ss')
  const [localDate, setLocalDate] = useState(null)

  useEffect(() => {
    if (value) {
      const date = new Date()
      setValue(new Date(`${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${value}`))
    }
  }, [])

  function setValue(date) {
    setFieldValue(name, formatDate(date), true)
    setFieldTouched(name, true)
    setLocalDate(date)
  }

  return (
    <TimeField
      name={name}
      setValue={setValue}
      {...others}
      value={localDate}
    />
  )
}

TimeFieldContainer.propTypes = {
  setFieldValue: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string
}

export default TimeFieldContainer
