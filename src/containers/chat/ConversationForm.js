
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'
import ConversationFormContent from '../../components/chat/ConversationFormContent'

const ConversationForm = ({ send, errors, setCreation }) => {
  const [selectedItems, setSelectedItems] = useState([])

  return (
    <Formik
      initialValues={{ recipients: '' }}
      onSubmit={values => {
        send(values)
        setCreation(false)
      }}
      render={formData => (
        <ConversationFormContent
          formData={formData}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
          errors={errors}
          setCreation={setCreation}
        />
      )}
    />
  )
}

ConversationForm.propTypes = {
  send: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  setCreation: PropTypes.func.isRequired
}

export default ConversationForm
