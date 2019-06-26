
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import MoreButton from 'MoreButton'

export const MoreButtonContainer = ({ args, ...others }) => {
  const [anchorEl, setAnchorEl] = useState(null)

  function handleClose() {
    setAnchorEl(null)
  }

  function handleOpen(e) {
    setAnchorEl(e.currentTarget)
  }

  function itemClick(clickHandler) {
    clickHandler(...args)
    handleClose()
  }

  return (
    <MoreButton
      handleClose={handleClose}
      handleOpen={handleOpen}
      itemClick={itemClick}
      anchorEl={anchorEl}
      {...others}
    />
  )
}

MoreButtonContainer.propTypes = {
  options: PropTypes.array.isRequired,
  args: PropTypes.array
}

export default MoreButtonContainer
