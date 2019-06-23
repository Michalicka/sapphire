
import React from 'react'
import PropTypes from 'prop-types'
import { TextField, IconButton } from '@material-ui/core'
import { Send as SendIcon } from '@material-ui/icons'

const CommentInput = ({ name, value, onChange, onBlur, error, helperText, disabled }) => {
  return (
    <div>
      <TextField
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        error={error}
        helperText={helperText}
        placeholder="Add comment"
        fullWidth
        color="secondary"
        disabled={disabled}
        InputProps={{
          endAdornment: (
            <IconButton type="submit">
              <SendIcon />
            </IconButton>
          )
        }}
      />
    </div>
  )
}

CommentInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  helperText: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired
}

export default CommentInput
