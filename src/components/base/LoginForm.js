
import React from 'react'
import { Formik } from 'formik'
import TextField from '@material-ui/core/TextField'
import CircularProgress from '@material-ui/core/CircularProgress'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { fieldProps } from '../../utils'
import RouterLink from './RouterLink'
import { PostTokens } from '../../validation/tokens'
import { Redirect } from 'react-router-dom'
import { dashboard, registration } from '../../routes'

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

export const LoginForm = ({ classes, tokensErrors, login, loading, status }) => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      onSubmit={values => {
        login(values)
      }}
      validationSchema={PostTokens}
      render={formData => {
        const userFieldProps = fieldProps(formData, tokensErrors)
        return (
          <React.Fragment>
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
            {status === 'Authorized' &&
              <Redirect to={dashboard} />
            }
          </React.Fragment>
        )
      }}
    />
  )
}

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
  tokensErrors: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  status: PropTypes.oneOf(['Authorized', 'Unauthorized'])
}

export default withStyles(styles)(LoginForm)
