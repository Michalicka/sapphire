
import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import Avatar from '@material-ui/core/Avatar'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { dashboard } from '../routes'

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
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleOpen(e) {
    this.setState({ anchorEl: e.currentTarget })
  }

  handleClose() {
    this.setState({ anchorEl: null })
  }

  handleLogout() {
    this.handleClose()
    this.props.logout()
  }

  render() {
    const { classes, avatar, initial } = this.props
    const { anchorEl } = this.state
    const open = !!anchorEl
    const EditLink = props => <Link to={dashboard} {...props} />
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
            component={EditLink}
            onClick={this.handleClose}
          >Edit</MenuItem>
          <MenuItem
            onClick={this.handleLogout}
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
  initial: PropTypes.string.isRequired
}

export default withStyles(styles)(ProfileController)
