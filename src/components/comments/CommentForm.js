
import React from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'
import CommentInput from './CommentInput'
import { fieldProps } from '../../utils'
import { PostTaskComment } from '../../validation/tasks'

const CommentForm = ({ errors, send, className, loading }) => {
  return (
    <Formik
      initialValues={{ content: '' }}
      onSubmit={(values, { resetForm }) => {
        send(values)
        resetForm()
      }}
      validtaionSchema={PostTaskComment}
      render={formData => (
        <form
          onSubmit={formData.handleSubmit}
        >
          <CommentInput
            {...fieldProps(formData, errors)('content')}
            disabled={loading}
          />
        </form>
      )}
    />
  )
}

CommentForm.propTypes = {
  errors: PropTypes.object.isRequired,
  send: PropTypes.func.isRequired,
  className: PropTypes.string,
  loading: PropTypes.bool.isRequired
}

export default CommentForm
