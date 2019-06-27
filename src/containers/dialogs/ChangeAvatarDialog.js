
import React from 'react'
import PropTypes from 'prop-types'
import FormDialog from '../../components/dialogs/FormDialog'
import { PostAvatar } from '../../validation/users'

const fields = [
  {
    name: 'photo',
    type: 'file'
  }
]

export const ChangeAvatarDialog = ({ open, handleClose, errors, send, loading, changeErrors }) => {
  return (
    <FormDialog
      title="Change Avatar"
      fields={fields}
      send={values => send(values)}
      open={open}
      handleClose={() => {
        changeErrors()
        handleClose()
      }}
      validationSchema={PostAvatar}
      initialValues={{ photo: '' }}
      errors={errors}
      loading={loading}
    />
  )
}

ChangeAvatarDialog.propTypes = {
  send: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  changeErrors: PropTypes.func.isRequired
}

export default ChangeAvatarDialog
