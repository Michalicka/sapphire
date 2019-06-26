
import React from 'react'
import PropTypes from 'prop-types'
import FormDialog from '../../components/dialogs/FormDialog'
import { PutProjectMembers } from '../../validation/projects'

const fields = [
  {
    name: 'members',
    type: 'projectMembersSearch'
  }
]

export const EditProjectMembersDialog = ({ open, handleClose, errors, send, loading, changeErrors, id, changeProjectMembers }) => {
  return (
    <FormDialog
      title="Edit members"
      fields={fields}
      send={values => send(values, { id })}
      open={open}
      handleClose={() => {
        changeProjectMembers(id, [])
        changeErrors()
        handleClose()
      }}
      validationSchema={PutProjectMembers}
      initialValues={{ members: '' }}
      errors={errors}
      loading={loading}
    />
  )
}

EditProjectMembersDialog.propTypes = {
  send: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  changeErrors: PropTypes.func.isRequired,
  changeProjectMembers: PropTypes.func.isRequired,
  id: PropTypes.number
}

export default EditProjectMembersDialog
