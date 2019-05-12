
import React from 'react'
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

export class MoreButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      anchorEl: null
    }
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleClose() {
    this.setState({ anchorEl: null })
  }

  handleOpen(e) {
    this.setState({ anchorEl: e.currentTarget })
  }

  itemClick(clickHandler) {
    clickHandler()
    this.handleClose()
  }

  render() {
    const { anchorEl } = this.state
    const open = !!anchorEl
    return (
      <React.Fragment>
        <IconButton
          onClick={this.handleOpen}
        >
          <MoreVertIcon color="secondary" />
        </IconButton>
        <Menu
          open={open}
          onClose={this.handleClose}
          anchorEl={anchorEl}
        >
          {this.props.options.map(option => (
            <MenuItem
              key={option.key}
              onClick={this.itemClick.bind(this, option.clickHandler)}
            >{option.title}</MenuItem>
          ))}
        </Menu>
      </React.Fragment>
    )
  }
}

MoreButton.propTypes = {
  options: PropTypes.array.isRequired
}

export default MoreButton
