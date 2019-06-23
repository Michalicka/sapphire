
import React from 'react'
import PropTypes from 'prop-types'
import FormDialog from './FormDialog'
import { PutTasks } from '../validation/tasks'
import { tasksTypes } from '../routes'

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
    name: 'status_id',
    type: 'select',
    options: tasksTypes.map(task => ({
      value: task.id,
      label: task.name
    }))
  },
  {
    name: 'description'
  },
  {
    name: 'duration',
    type: 'time'
  }
]

export const EditTaskDialog = ({ open, handleClose, errors, send, loading, changeErrors, id, taskId, initialValues }) => {
  return (
    <FormDialog
      title="Edit Task"
      fields={fields}
      send={values => send({ id, taskId }, values)}
      open={open}
      handleClose={() => {
        changeErrors()
        handleClose()
      }}
      validationSchema={PutTasks}
      initialValues={initialValues}
      errors={errors}
      loading={loading}
    />
  )
}

EditTaskDialog.propTypes = {
  send: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  changeErrors: PropTypes.func.isRequired,
  id: PropTypes.number,
  taskId: PropTypes.number,
  initialValues: PropTypes.object.isRequired
}

export default EditTaskDialog
