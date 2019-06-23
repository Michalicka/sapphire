
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import CommentWrap from './CommentWrap'

const CommentContainer = ({ getComments, ...others }) => {
  useEffect(() => {
    getComments()
  }, [])

  return <CommentWrap {...others} />
}

CommentContainer.propTypes = {
  getComments: PropTypes.func.isRequired
}

export default CommentContainer
