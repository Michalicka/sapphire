
import React from 'react'
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

export const MoreButton = ({ anchorEl, handleClose, handleOpen, itemClick, options }) => {
  const open = !!anchorEl
  return (
    <React.Fragment>
      <IconButton
        onClick={handleOpen}
      >
        <MoreVertIcon color="secondary" />
      </IconButton>
      <Menu
        open={open}
        onClose={handleClose}
        anchorEl={anchorEl}
      >
        {options.map(option => (
          <MenuItem
            key={option.title}
            onClick={() => itemClick(option.clickHandler)}
          >{option.title}</MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  )
}

MoreButton.propTypes = {
  anchorEl: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleOpen: PropTypes.func.isRequired,
  itemClick: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
}

export default MoreButton
