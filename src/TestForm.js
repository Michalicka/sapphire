
import React, { useEffect } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types'
const TestForm = ({ values, errors, handleSubmit, handleChange, count }) => {
  useEffect(() => {
    console.log({ errors })
  })
  return (
    <div>
      <TextField
        label="test"
        name="test"
        value={values.test}
        error={errors.test !== undefined}
        onChange={handleChange}
        fullWidth
      />
      <span style={{ color: 'red' }}>{errors.test}</span>
      <Button
        variant="contained"
        color="primary"
        data-testid="button"
        id="button-absolute-specific"
        className="test-button"
      >
        {count}
      </Button>
    </div>
  )
}

TestForm.propTypes = {
  values: PropTypes.object.isRequired,
  errors: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired
}

export default TestForm
