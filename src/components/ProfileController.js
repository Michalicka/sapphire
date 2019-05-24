
import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import Avatar from '@material-ui/core/Avatar'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const styles = theme => ({
  button: {
    padding: 0,
    marginLeft: theme.spacing.unit / 2
  },
  avatar: {
    backgroundColor: theme.palette.secondary[400]
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

export class ProfileController extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      anchorEl: null
    }
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.itemClick = this.itemClick.bind(this)
  }

  handleOpen(e) {
    this.setState({ anchorEl: e.currentTarget })
  }

  handleClose() {
    this.setState({ anchorEl: null })
  }

  itemClick(action) {
    action()
    this.handleClose()
  }

  render() {
    const { classes, avatar, initial, logout, editProfile, changePassword } = this.props
    const { anchorEl } = this.state
    const open = !!anchorEl
    return (
      <React.Fragment>
        <IconButton
          className={classes.button}
          onClick={this.handleOpen}
        >
          <Avatar
            className={classes.avatar}
            src={avatar || undefined}
          >{avatar === '' ? initial : ''}</Avatar>
        </IconButton>
        <Menu
          open={open}
          onClose={this.handleClose}
          anchorEl={anchorEl}
        >
          <MenuItem
            onClick={() => this.itemClick(editProfile)}
          >Edit</MenuItem>
          <MenuItem
            onClick={() => this.itemClick(changePassword)}
          >Change password</MenuItem>
          <MenuItem
            onClick={() => this.itemClick(logout)}
          >Log out</MenuItem>
        </Menu>
      </React.Fragment>
    )
  }
}

ProfileController.propTypes = {
  classes: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  avatar: PropTypes.string.isRequired,
  initial: PropTypes.string.isRequired,
  editProfile: PropTypes.func.isRequired,
  changePassword: PropTypes.func.isRequired
}

export default withStyles(styles)(ProfileController)
