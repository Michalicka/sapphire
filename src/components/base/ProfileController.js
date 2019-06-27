
import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { withStyles } from '@material-ui/core/styles'
import AvatarWrap from './AvatarWrap'
import PropTypes from 'prop-types'

const styles = theme => ({
  button: {
    padding: 0,
    marginLeft: theme.spacing.unit / 2
  },
  link: {
    textDecoration: 'none',

    '&:focus': {
      display: 'block',
      backgroundColor: 'rgba(0, 0, 0, 0.08)',
      outline: 'none'
    }
  }
})

export const ProfileController = ({ classes, avatar, initial, logout, editProfile, changePassword, changeAvatar, anchorEl, handleOpen, handleClose, itemClick }) => {
  const open = !!anchorEl
  return (
    <React.Fragment>
      <IconButton
        className={classes.button}
        onClick={handleOpen}
      >
        <AvatarWrap
          avatar={avatar}
          initial={initial}
        />
      </IconButton>
      <Menu
        open={open}
        onClose={handleClose}
        anchorEl={anchorEl}
      >
        <MenuItem
          onClick={() => itemClick(editProfile)}
        >Edit</MenuItem>
        <MenuItem
          onClick={() => itemClick(changePassword)}
        >Change password</MenuItem>
        <MenuItem
          onClick={() => itemClick(changeAvatar)}
        >Change avatar</MenuItem>
        <MenuItem
          onClick={() => itemClick(logout)}
        >Log out</MenuItem>
      </Menu>
    </React.Fragment>
  )
}

ProfileController.propTypes = {
  classes: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  avatar: PropTypes.string.isRequired,
  initial: PropTypes.string.isRequired,
  editProfile: PropTypes.func.isRequired,
  changePassword: PropTypes.func.isRequired,
  changeAvatar: PropTypes.func.isRequired,
  anchorEl: PropTypes.object,
  handleOpen: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  itemClick: PropTypes.func.isRequired
}

export default withStyles(styles)(ProfileController)
