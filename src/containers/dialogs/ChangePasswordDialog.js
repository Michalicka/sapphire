
import React from 'react'
import PropTypes from 'prop-types'
import FormDialog from '../../components/dialogs/FormDialog'
import { PutPasswords } from '../../validation/users'

const fields = [
  {
    name: 'password',
    type: 'password'
  },
  {
    name: 'password_confirmation',
    type: 'password'
  }
]

export const ChangePasswordDialog = ({ open, handleClose, errors, send, loading, changeErrors }) => {
  return (
    <FormDialog
      title="Change Password"
      fields={fields}
      send={values => send(values)}
      open={open}
      handleClose={() => {
        changeErrors()
        handleClose()
      }}
      validationSchema={PutPasswords}
      initialValues={{ password: '', password_confirmation: '' }}
      errors={errors}
      loading={loading}
    />
  )
}

ChangePasswordDialog.propTypes = {
  send: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  changeErrors: PropTypes.func.isRequired
}

export default ChangePasswordDialog
