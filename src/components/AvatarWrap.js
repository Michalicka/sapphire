
import React from 'react'
import PropTypes from 'prop-types'
import Avatar from '@material-ui/core/Avatar'
import { withStyles } from '@material-ui/core'
import classNames from 'classnames'

const styles = theme => ({
  avatar: {
    backgroundColor: theme.palette.secondary.main
  }
})

const AvatarWrap = ({ avatar, initial, className, classes }) => {
  return (
    <Avatar
      className={classNames(className, classes.avatar)}
      src={avatar || undefined}
    >{!avatar ? initial : ''}</Avatar>
  )
}

AvatarWrap.propTypes = {
  avatar: PropTypes.string,
  initial: PropTypes.string.isRequired,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(AvatarWrap)
