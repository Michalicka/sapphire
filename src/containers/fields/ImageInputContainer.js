
import React from 'react'
import PropTypes from 'prop-types'
import ImageInput from '../../components/fields/ImageInput'

export const ImageInputContainer = ({ setFieldValue, name, setFieldTouched, ...others }) => {
  function setValue(value) {
    setFieldValue(name, value)
    setFieldTouched(name, true)
  }

  function handleChange(e) {
    if (e.currentTarget.value) {
      const reader = new FileReader()
      const event = { ...e }
      reader.onload = (ev) => {
        setValue(ev.target.result)
      }
      reader.readAsDataURL(event.currentTarget.files[0])
    } else {
      setValue('')
    }
  }

  return (
    <ImageInput
      name={name}
      handleChange={handleChange}
      {...others}
    />
  )
}

ImageInputContainer.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.bool,
  helperText: PropTypes.string.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired
}

export default ImageInputContainer
