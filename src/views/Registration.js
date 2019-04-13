
import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import { Formik } from 'formik'
import { PostUsers } from '../validation/users'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  logo: {
    color: theme.palette.primary.main,
    fontSize: 48,
    marginBottom: theme.spacing.unit * 2
  },
  wrap: {
    paddingTop: theme.spacing.unit * 8,
    paddingBottom: theme.spacing.unit * 4,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing.unit * 16
    }
  },
  content: {
    padding: `0 ${theme.spacing.unit * 2}px`,
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 5,
    textAlign: 'center',
    marginTop: theme.spacing.unit * 4
  },
  title: {
    lineHeight: 1.3
  },
  field: {
    marginBottom: theme.spacing.unit * 2
  },
  buttonWrap: {
    marginTop: theme.spacing.unit * 3
  }
})

export const Registration = ({ classes }) => {
  return (
    <div className={classes.wrap}>
      <Grid
        container
        justify="center"
        spacing={16}
      >
        <Grid
          item
          xs={12}
          sm={10}
          md={8}
          lg={5}
        >
          <Paper className={classes.content}>
            <div className={classes.logo}>Logo</div>
            <Typography
              variant="h4"
              gutterBottom
              className={classes.title}
            >Registration</Typography>
            <Grid
              container
              justify="center"
              spacing={0}
            >
              <Grid
                item
                sm={8}
              >
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
                    <form onSubmit={handleSubmit}>
                      <TextField
                        name="displayName"
                        label="Display name"
                        fullWidth
                        onChange={handleChange}
                        onBlur={handleBlur}
                        values={values.displayName}
                        error={!!errors.displayName && !!touched.displayName}
                        helperText={touched.displayName ? errors.displayName : ''}
                        className={classes.field}
                      />
                      <TextField
                        name="email"
                        label="E-mail"
                        fullWidth
                        onChange={handleChange}
                        onBlur={handleBlur}
                        values={values.email}
                        error={!!errors.email && !!touched.email}
                        helperText={touched.email ? errors.email : ''}
                        className={classes.field}
                      />
                      <TextField
                        name="password"
                        label="Password"
                        fullWidth
                        onChange={handleChange}
                        onBlur={handleBlur}
                        values={values.password}
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
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

Registration.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Registration)
