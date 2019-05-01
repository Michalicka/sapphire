
import React from 'react'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import WarningIcon from '@material-ui/icons/Warning'
import ErrorIcon from '@material-ui/icons/Error'
import InfoIcon from '@material-ui/icons/Info'
import PropTypes from 'prop-types'

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon
}

export const StatusIcon = ({ variant, className }) => {
  const Icon = variantIcon[variant]
  return <Icon className={className} />
}

StatusIcon.propTypes = {
  variant: PropTypes.oneOf(['success', 'error', 'warning', 'info']).isRequired,
  className: PropTypes.string
}

export default StatusIcon
