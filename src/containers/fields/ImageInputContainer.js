
import React from 'react'
import PropTypes from 'prop-types'
import ImageInput from 'ImageInput'

export const ImageInputContainer = ({ setFieldValue, name, setFieldTouched, ...others }) => {
  function setValue(value) {
    setFieldValue(this.props.name, value)
    setFieldTouched(this.props.name, true)
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
  classes: PropTypes.object.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired
}

export default ImageInputContainer
