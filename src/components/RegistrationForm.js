
import React from 'react'
import { Formik } from 'formik'
import { PostUsers } from '../validation/users'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const styles = theme => ({
  field: {
    marginBottom: theme.spacing.unit * 2
  },
  buttonWrap: {
    marginTop: theme.spacing.unit * 2
  }
})

export const RegistrationForm = ({ classes }) => {
  return (
    <Formik
      initialValues={{
        displayName: '',
        email: '',
        password: ''
      }}
      validationSchema={PostUsers}
      onSubmit={values => {
        console.log(values)
      }}
      render={({ handleChange, handleBlur, values, handleSubmit, errors, touched }) => (
        <form
          id="form"
          onSubmit={handleSubmit}
        >
          <TextField
            name="displayName"
            id="displayName"
            label="Display name"
            fullWidth
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.displayName}
            error={!!errors.displayName && !!touched.displayName}
            helperText={touched.displayName ? errors.displayName : ''}
            className={classes.field}
          />
          <TextField
            name="email"
            id="email"
            label="E-mail"
            fullWidth
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            error={!!errors.email && !!touched.email}
            helperText={touched.email ? errors.email : ''}
            className={classes.field}
          />
          <TextField
            name="password"
            id="password"
            label="Password"
            fullWidth
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            error={!!errors.password && !!touched.password}
            helperText={touched.password ? errors.password : ''}
            className={classes.field}
          />
          <div>
            <Button
              variant="contained"
              color="primary"
              className={classes.buttonWrap}
              onClick={handleSubmit}
            >Register</Button>
          </div>
        </form>
      )}
    />
  )
}

RegistrationForm.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(RegistrationForm)
