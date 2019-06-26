
import React from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'
import { TextField } from '@material-ui/core'
import { fieldProps } from '../../utils'

const MessagesForm = ({ postMessages, postMessagesLoading, errors, actualConversation }) => {
  return (
    <Formik
      initialValues={{ content: '' }}
      onSubmit={(values, { resetForm }) => {
        postMessages(actualConversation, values)
        resetForm()
      }}
      render={formData => (
        <form onSubmit={formData.handleSubmit}>
          <TextField
            {...fieldProps(formData, errors)('content')}
            label=""
            placeholder="Send message"
            disabled={postMessagesLoading}
            fullWidth
          />
        </form>
      )}
    />
  )
}

MessagesForm.propTypes = {
  postMessages: PropTypes.func.isRequired,
  postMessagesLoading: PropTypes.bool.isRequired,
  errors: PropTypes.object.isRequired,
  actualConversation: PropTypes.number.isRequired
}

export default MessagesForm
