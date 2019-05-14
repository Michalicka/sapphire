
import React from 'react'
import PropTypes from 'prop-types'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Formik } from 'formik'
import { fieldProps } from '../utils'

export const FormDialog = ({ title, fields, send, open, handleClose, validationSchema, initialValues, errors }) => {
  return (
    <Dialog
      open={open}
      handleClose={handleClose}
    >
      <DialogTitle>{title}</DialogTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={send}
        render={(formData) => {
          const formFieldProps = fieldProps(formData, errors)
          return (
            <form
              onSubmit={formData.handleSubmit}
            >
              <DialogContent>
                {fields.map(field => (
                  <TextField
                    key={field.name}
                    {...formFieldProps(field.name, field.type)}
                    fullWidth
                  />
                ))}
              </DialogContent>
              <DialogActions>
                <Button
                  variant="contained"
                  color="secondary"
                >Send</Button>
                <Button
                  color="secondary"
                  onClick={e => {
                    e.preventDefault()
                    handleClose()
                  }}
                >Cancel</Button>
              </DialogActions>
            </form>
          )
        }}
      />
    </Dialog>
  )
}

FormDialog.propTypes = {
  title: PropTypes.string.isRequired,
  fields: PropTypes.array.isRequired,
  send: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  validationSchema: PropTypes.object.isRequired,
  initialValues: PropTypes.object,
  errors: PropTypes.object.isRequired
}

export default FormDialog
