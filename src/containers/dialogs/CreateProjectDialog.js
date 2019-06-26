
import React from 'react'
import PropTypes from 'prop-types'
import FormDialog from '../../components/dialogs/FormDialog'
import { PostProject } from '../../validation/projects'

const fields = [
  {
    name: 'name'
  },
  {
    name: 'description'
  }
]

export const CreateProjectDialog = ({ open, handleClose, errors, send, loading, changeErrors }) => {
  return (
    <FormDialog
      title="Create project"
      fields={fields}
      send={send}
      open={open}
      handleClose={() => {
        changeErrors()
        handleClose()
      }}
      validationSchema={PostProject}
      initialValues={{ name: '', description: '' }}
      errors={errors}
      loading={loading}
    />
  )
}

CreateProjectDialog.propTypes = {
  send: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  changeErrors: PropTypes.func.isRequired
}

export default CreateProjectDialog
