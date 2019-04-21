
import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import RegistrationForm from '../components/RegistrationForm'
import Logo from '../components/Logo'

const styles = theme => ({
  logo: {
    color: theme.palette.primary.main,
    fontSize: 48,
    marginBottom: theme.spacing.unit * 2,
    maxWidth: 160,
    display: 'inline-block'
  },
  wrap: {
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 4,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing.unit * 16
    }
  },
  content: {
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 5,
    textAlign: 'center',
    marginTop: theme.spacing.unit * 4
  },
  title: {
    lineHeight: 1.3
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
            <Logo className={classes.logo}/>
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
                <RegistrationForm />
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
