
import React from 'react'
import { Formik } from 'formik'
import { PostUsers } from '../../validation/users'
import TextField from '@material-ui/core/TextField'
import CircularProgress from '@material-ui/core/CircularProgress'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import { withStyles } from '@material-ui/core/styles'
import RouterLink from './RouterLink'
import PropTypes from 'prop-types'
import { fieldProps } from '../../utils'
import { login } from '../../routes'
import { Typography } from '@material-ui/core'
import { Redirect } from 'react-router-dom'

const styles = theme => ({
  field: {
    marginBottom: theme.spacing.unit * 2
  },
  button: {
    marginTop: theme.spacing.unit * 4
  },
  spinner: {
    marginBottom: theme.spacing.unit
  }
})

export const RegistrationForm = ({ classes, userErrors, registration, loading, registrationSuccess }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      }}
      validationSchema={PostUsers}
      onSubmit={values => {
        registration(values)
      }}
      render={formData => {
        const userFieldProps = fieldProps(formData, userErrors)
        return (
          <form
            data-test-id="registration-form"
            onSubmit={formData.handleSubmit}
          >
            {
              loading &&
              <CircularProgress
                color="primary"
                className={classes.spinner}
              />
            }
            <TextField
              {...userFieldProps('name')}
              fullWidth
              className={classes.field}
            />
            <TextField
              {...userFieldProps('email')}
              fullWidth
              className={classes.field}
            />
            <TextField
              {...userFieldProps('password', 'password')}
              fullWidth
              className={classes.field}
            />
            <TextField
              {...userFieldProps('password_confirmation', 'password')}
              fullWidth
              className={classes.field}
            />
            <Typography
              variant="body2"
              align="left"
              gutterBottom
            >
              Do you already have an account? <Link
                component={RouterLink({ to: login })}
                color="secondary"
              >Log in</Link>
            </Typography>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              type="submit"
              fullWidth
              disabled={loading}
            >Register</Button>
            {registrationSuccess &&
              <Redirect
                to={{
                  pathname: login,
                  search: '?registration-success'
                }}
                push
              />
            }
          </form>
        )
      }}
    />
  )
}

RegistrationForm.propTypes = {
  classes: PropTypes.object.isRequired,
  registration: PropTypes.func.isRequired,
  userErrors: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  registrationSuccess: PropTypes.bool
}

export default withStyles(styles)(RegistrationForm)
