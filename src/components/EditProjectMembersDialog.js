
import React from 'react'
import PropTypes from 'prop-types'
import FormDialog from './FormDialog'
import { PutProjectMembers } from '../validation/projects'

const fields = [
  {
    name: 'members',
    type: 'projectMembersSearch'
  }
]

export const EditProjectDialog = ({ open, handleClose, errors, send, loading, changeErrors, initialValues, id }) => {
  return (
    <FormDialog
      title="Edit members"
      fields={fields}
      send={values => send(values, { id })}
      open={open}
      handleClose={() => {
        changeErrors()
        handleClose()
      }}
      validationSchema={PutProjectMembers}
      initialValues={{ members: [] }}
      errors={errors}
      loading={loading}
    />
  )
}

EditProjectDialog.propTypes = {
  send: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  changeErrors: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired
}

export default EditProjectDialog
