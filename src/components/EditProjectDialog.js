
import React from 'react'
import PropTypes from 'prop-types'
import FormDialog from './FormDialog'
import { PostProject } from '../validation/projects'

const fields = [
  {
    name: 'name'
  },
  {
    name: 'description'
  }
]

export const EditProjectDialog = ({ open, handleClose, errors, send, loading, changeErrors, initialValues, id }) => {
  return (
    <FormDialog
      title="Create project"
      fields={fields}
      send={values => send(values, { id })}
      open={open}
      handleClose={() => {
        changeErrors()
        handleClose()
      }}
      validationSchema={PostProject}
      initialValues={initialValues}
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
  id: PropTypes.number
}

export default EditProjectDialog
