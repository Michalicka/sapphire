
import React from 'react'
import PropTypes from 'prop-types'
import FormDialog from './FormDialog'
import { PostTasks } from '../validation/tasks'

const fields = [
  {
    name: 'title'
  },
  {
    name: 'term',
    type: 'dateTime'
  },
  {
    name: 'assignee_id',
    type: 'assigneeSearch'
  },
  {
    name: 'description'
  },
  {
    name: 'duration',
    type: 'time'
  }
]

export const CreateProjectDialog = ({ open, handleClose, errors, send, loading, changeErrors, statusId, id }) => {
  return (
    <FormDialog
      title="Create Task"
      fields={fields}
      send={values => send({ id }, { ...values, status_id: statusId })}
      open={open}
      handleClose={() => {
        changeErrors()
        handleClose()
      }}
      validationSchema={PostTasks}
      initialValues={{ title: '', term: null, assignee_id: '', description: '', duration: null }}
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
  changeErrors: PropTypes.func.isRequired,
  id: PropTypes.number,
  statusId: PropTypes.number.isRequired
}

export default CreateProjectDialog
