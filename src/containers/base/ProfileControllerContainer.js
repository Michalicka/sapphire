
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ProfileController from '../../components/base/ProfileController'

export const ProfileControllerContainer = (props) => {
  const [anchorEl, setAnchorEl] = useState(null)

  function handleOpen(e) {
    setAnchorEl(e.currentTarget)
  }

  function handleClose() {
    setAnchorEl(null)
  }

  function itemClick(action) {
    action()
    handleClose()
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
  logout: PropTypes.func.isRequired,
  avatar: PropTypes.string.isRequired,
  initial: PropTypes.string.isRequired,
  editProfile: PropTypes.func.isRequired,
  changePassword: PropTypes.func.isRequired,
  changeAvatar: PropTypes.func.isRequired
}

export default ProfileControllerContainer
