
import React from 'react'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import classNames from 'classnames'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import green from '@material-ui/core/colors/green'
import amber from '@material-ui/core/colors/amber'
import StatusIcon from './StatusIcon'

const styles = theme => ({
  success: {
    backgroundColor: green[600]
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  info: {
    backgroundColor: theme.palette.primary.dark
  },
  warning: {
    backgroundColor: amber[700]
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit
  },
  message: {
    display: 'flex',
    alignItems: 'center'
  }
})

export const MessagebarContent = ({ classes, className, message, onClose, variant, ...other }) => {
  return (
    <SnackbarContent
      className={classNames(classes[variant], className)}
      message={
        <span className={classes.message}>
          <StatusIcon
            variant={variant}
            className={classNames(classes.icon, classes.iconVariant)}
          />
          {message}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className={classes.close}
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>
      ]}
      {...other}
    />
  )
}

MessagebarContent.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  message: PropTypes.node,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired
}

export default withStyles(styles)(MessagebarContent)
