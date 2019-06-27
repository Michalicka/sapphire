
import logo from '../../assets/brands/logo.png'
import logoWhite from '../../assets/brands/logo-white.png'
import React from 'react'
import PropTypes from 'prop-types'

const Logo = ({ className, white }) => {
  return (
    <img
      src={white ? logoWhite : logo}
      alt="sapphire logo"
      className={className}
    />
  )
}

Logo.propTypes = {
  className: PropTypes.string,
  white: PropTypes.bool
}

export default Logo
