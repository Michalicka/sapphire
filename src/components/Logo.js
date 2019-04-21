
import logo from '../assets/brands/logo.png'
import React from 'react'
import PropTypes from 'prop-types'

const Logo = ({ className }) => {
  return (
    <img
      src={logo}
      alt="sapphire logo"
      className={className}
    />
  )
}

Logo.propTypes = {
  className: PropTypes.string
}

export default Logo
