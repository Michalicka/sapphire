
import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import Logo from '../components/Logo'

const styles = theme => ({
  logo: {
    color: theme.palette.primary.main,
    fontSize: 48,
    marginBottom: theme.spacing.unit,
    maxWidth: 160,
    display: 'inline-block'
  },
  wrap: {
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 4,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing.unit * 12
    }
  },
  content: {
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 3,
    textAlign: 'center',
    marginTop: theme.spacing.unit * 4
  },
  title: {
    lineHeight: 1.3,
    marginBottom: theme.spacing.unit * 2
  }
})

export const Login = ({ classes }) => {
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
          sm={7}
          md={5}
          lg={4}
        >
          <Paper className={classes.content}>
            <Logo className={classes.logo} />
            <Typography
              variant="h5"
              gutterBottom
              className={classes.title}
            >Login</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Login)
