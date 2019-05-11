
import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MessageIcon from '@material-ui/icons/Message'
import Avatar from '@material-ui/core/Avatar'
import Logo from '../components/Logo'
import Projects from './Projects'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { Switch, Redirect, Route } from 'react-router-dom'
import { projects as projectsLink, login } from '../routes'
import { connect } from 'react-redux'

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
    paddingTop: theme.spacing.unit * 12,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    maxWidth: 1100,
    margin: '0 auto'
  }
})

export const Dashboard = ({ classes, match, status }) => {
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
        <Switch>
          <Route
            path={`${match.url}${projectsLink}`}
            exact
            component={Projects}
          />
          <Route
            path={match.url}
            exact
            render={() => <Redirect to={`${match.url}${projectsLink}`} />}
          />
        </Switch>
      </div>
      {(status === 'Unauthorized' || localStorage.getItem('accessToken') === null) &&
        <Redirect to={login} />
      }
    </div>
  )
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  status: PropTypes.oneOf(['Authorized', 'Unauthorized'])
}

const mapStateToProps = state => ({
  status: state.tokens.status
})

export default connect(mapStateToProps)(withStyles(styles)(Dashboard))
