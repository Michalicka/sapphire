
import React from 'react'
import PropTypes from 'prop-types'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Formik } from 'formik'
import { fieldProps } from '../../utils'
import { withStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import ImageInputContainer from '../../containers/fields/ImageInputContainer'
import ProjectMembersSearch from '../../containers/redux-containers/ProjectMembersSearch'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from 'material-ui-pickers'
import DateTimeField from '../fields/DateTimeField'
import TimeFieldContainer from '../../containers/fields/TimeFieldContainer'
import AssigneeSearch from '../../containers/redux-containers/AssigneeSearch'
import { MenuItem } from '@material-ui/core'

const styles = theme => ({
  dialog: {
    minWidth: 320
  },
  field: {
    marginBottom: theme.spacing.unit * 2
  },
  loader: {
    textAlign: 'center',
    marginTop: theme.spacing.unit
  }
})

export const FormDialog = ({ title, fields, send, open, handleClose, validationSchema, initialValues, errors, classes, loading }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md"
    >
      <DialogTitle>{title}</DialogTitle>
      <div className={classes.loader}>
        {loading &&
          <CircularProgress
            color="primary"
          />
        }
      </div>
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
              <DialogContent className={classes.dialog}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  {fields.map((field, index) => {
                    if (field.type === 'file') {
                      return (
                        <ImageInputContainer
                          key={field.name}
                          className={classes.field}
                          {...formFieldProps(field.name, field.type)}
                          setFieldValue={formData.setFieldValue}
                          setFieldTouched={formData.setFieldTouched}
                        />
                      )
                    } else if (field.type === 'projectMembersSearch') {
                      return (
                        <ProjectMembersSearch
                          key={field.name}
                          className={classes.field}
                          {...formFieldProps(field.name)}
                          setFieldValue={formData.setFieldValue}
                          setFieldTouched={formData.setFieldTouched}
                        />
                      )
                    } else if (field.type === 'dateTime') {
                      return (
                        <DateTimeField
                          key={field.name}
                          className={classes.field}
                          {...formFieldProps(field.name)}
                          setFieldValue={formData.setFieldValue}
                          setFieldError={formData.setFieldError}
                          setFieldTouched={formData.setFieldTouched}
                        />
                      )
                    } else if (field.type === 'time') {
                      return (
                        <TimeFieldContainer
                          key={field.name}
                          className={classes.field}
                          {...formFieldProps(field.name)}
                          setFieldValue={formData.setFieldValue}
                          setFieldError={formData.setFieldError}
                          setFieldTouched={formData.setFieldTouched}
                        />
                      )
                    } else if (field.type === 'assigneeSearch') {
                      return (
                        <AssigneeSearch
                          key={field.name}
                          className={classes.field}
                          {...formFieldProps(field.name)}
                          setFieldValue={formData.setFieldValue}
                          setFieldTouched={formData.setFieldTouched}
                          oneOnly
                        />
                      )
                    } else if (field.type === 'select') {
                      return (
                        <TextField
                          key={field.name}
                          className={classes.field}
                          {...formFieldProps(field.name, field.type)}
                          select
                          fullWidth
                        >
                          {field.options.map(option => (
                            <MenuItem
                              key={option.value}
                              value={option.value}
                            >
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      )
                    } else {
                      return (
                        <TextField
                          key={field.name}
                          className={classes.field}
                          {...formFieldProps(field.name, field.type)}
                          fullWidth
                        />
                      )
                    }
                  })}
                </MuiPickersUtilsProvider>
              </DialogContent>
              <DialogActions>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={loading}
                >Send</Button>
                <Button
                  color="primary"
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
  errors: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
}

export default withStyles(styles)(FormDialog)
