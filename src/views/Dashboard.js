
import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import MessageIcon from '@material-ui/icons/Message'
import Avatar from '@material-ui/core/Avatar'
import Logo from '../components/Logo'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const styles = theme => ({
  appBar: {
    paddingTop: theme.spacing.unit / 2,
    paddingBottom: theme.spacing.unit / 2
  },
  logoContainer: {
    flexGrow: 1
  },
  logo: {
    width: 160
  },
  avatarButton: {
    padding: 0,
    marginLeft: theme.spacing.unit / 2
  },
  avatar: {
    backgroundColor: theme.palette.secondary[400]
  },
  container: {
    paddingTop: theme.spacing.unit * 10,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2
  }
})

export const Dashboard = ({ classes }) => {
  return (
    <div>
      <AppBar
        position="fixed"
        className={classes.appBar}
      >
        <ToolBar>
          <div className={classes.logoContainer}>
            <Logo
              className={classes.logo}
              white
            />
          </div>
          <IconButton>
            <MessageIcon
              style={{ fill: '#fff' }}
            />
          </IconButton>
          <IconButton className={classes.avatarButton}>
            <Avatar className={classes.avatar}>U</Avatar>
          </IconButton>
        </ToolBar>
      </AppBar>
      <div className={classes.container}>
        <Grid
          container
          justify="center"
          spacing={16}
        >
        </Grid>
      </div>
    </div>
  )
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Dashboard)
