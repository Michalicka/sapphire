
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ProfileController from '../../components/base/ProfileController'

export const ProfileControllerContainer = (props) => {
  const [anchorEl, setAnchorEl] = useState(null)

  function handleOpen(e) {
    setAnchorEl(e.currentTaget)
  }

  function handleClose() {
    this.setState({ anchorEl: null })
  }

  function itemClick(action) {
    action()
    this.handleClose()
  }

  return (
    <ProfileController
      anchorEl={anchorEl}
      handleOpen={handleOpen}
      handleClose={handleClose}
      itemClick={itemClick}
      {...props}
    />
  )
}

ProfileController.propTypes = {
  classes: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  avatar: PropTypes.string.isRequired,
  initial: PropTypes.string.isRequired,
  editProfile: PropTypes.func.isRequired,
  changePassword: PropTypes.func.isRequired,
  changeAvatar: PropTypes.func.isRequired
}

export default ProfileControllerContainer
