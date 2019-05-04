
import React from 'react'
import { Formik } from 'formik'
import TextField from '@material-ui/core/TextField'
import CircularProgress from '@material-ui/core/CircularProgress'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { fieldProps } from '../utils'
import { registration } from '../routes'
import RouterLink from './RouterLink'
import { Login } from '../validation/users'

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

export const LoginForm = ({ classes, tokensErrors, login, loading }) => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      onSubmit={values => {
        login(values)
      }}
      validationSchema={Login}
      render={formData => {
        const userFieldProps = fieldProps(formData, tokensErrors)
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
              {...userFieldProps('email')}
              fullWidth
              className={classes.field}
            />
            <TextField
              {...userFieldProps('password', 'password')}
              fullWidth
              className={classes.field}
            />
            <Typography
              variant="body2"
              align="left"
              gutterBottom
            >
              Do not you have an account yet? <Link
                component={RouterLink({ to: registration })}
                color="secondary"
              >Sign up</Link>
            </Typography>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              type="submit"
              fullWidth
              disabled={loading}
            >Login</Button>
          </form>
        )
      }}
    />
  )
}

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
  tokensErrors: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
}

export default withStyles(styles)(LoginForm)
