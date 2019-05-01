
import React from 'react'
import MessagebarContent from './MessagebarContent'
import Snackbar from '@material-ui/core/Snackbar'
import PropTypes from 'prop-types'

export const Messagebar = ({ open, message, variant, handleClose }) => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center'
      }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <MessagebarContent
        onClose={handleClose}
        variant={variant}
        message={message}
      />
    </Snackbar>
  )
}

Messagebar.propTypes = {
  open: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
  handleClose: PropTypes.func.isRequired
}

export default Messagebar
