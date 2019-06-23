
import React from 'react'
import PropTypes from 'prop-types'
import CommentList from './CommentList'
import CommentForm from './CommentForm'

const CommentWrap = ({ list, errors, className, send, loading, sendLoading }) => {
  return (
    <div className={className}>
      <CommentList
        list={list}
      />
      <CommentForm
        errors={errors}
        send={send}
        loading={loading || sendLoading}
      />
    </div>
  )
}

CommentWrap.propTypes = {
  list: PropTypes.array.isRequired,
  errors: PropTypes.object.isRequired,
  className: PropTypes.string,
  send: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  sendLoading: PropTypes.bool.isRequired
}

export default CommentWrap
