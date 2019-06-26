
import React from 'react'
import { Link } from 'react-router-dom'

export function RouterLink(routerProps) {
  return function DisplayLink(props) {
    return <Link {...routerProps} {...props} />
  }
}

export default RouterLink
