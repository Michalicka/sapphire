
import React, { useEffect } from 'react'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MessageIcon from '@material-ui/icons/Message'
import Logo from '../components/Logo'
import Projects from './Projects'
import Tasks from './Tasks'
import ProfileController from '../containers/ProfileController'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { Switch, Redirect, Route } from 'react-router-dom'
import { projects as projectsLink, login, tasks as tasksLink } from '../routes'
import { connect } from 'react-redux'
import { refreshTokenWatch } from '../actions/tokens'
import { getMeRequest } from '../actions/user'
import EditProfileDialog from '../containers/EditProfileDialog'
import ChangePasswordDialog from '../containers/ChangePasswordDialog'
import ChangeAvatarDialog from '../containers/ChangeAvatarDialog'
import EditProjectMembersDialog from '../containers/EditProjectMembersDialog'
import ChatDialog from '../containers/ChatDialog'
import { getProjectsRequest } from '../actions/projects'
import { changeModal } from '../actions/modal'

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
  container: {
    paddingTop: theme.spacing.unit * 12,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    maxWidth: 1100,
    margin: '0 auto'
  }
})

export const Dashboard = ({ classes, match, status, refreshTokenWatch, getMe, getProjects, openChat }) => {
  useEffect(() => {
    if (localStorage.getItem('accessToken') !== null) {
      refreshTokenWatch()
      getMe()
      getProjects()
    }
  })

  return (
    <React.Fragment>
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
          <IconButton
            onClick={openChat}
          >
            <MessageIcon
              style={{ fill: '#fff' }}
            />
          </IconButton>
          <ProfileController />
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
            path={`${match.url}${projectsLink}${tasksLink}`}
            component={Tasks}
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
      <EditProfileDialog />
      <ChangePasswordDialog />
      <ChangeAvatarDialog />
      <EditProjectMembersDialog />
      <ChatDialog />
    </React.Fragment>
  )
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  status: PropTypes.oneOf(['Authorized', 'Unauthorized']),
  refreshTokenWatch: PropTypes.func.isRequired,
  getMe: PropTypes.func.isRequired,
  getProjects: PropTypes.func.isRequired,
  openChat: PropTypes.func.isRequired
}

export const mapStateToProps = state => ({
  status: state.tokens.status
})

export const mapDispatchToProps = dispatch => ({
  refreshTokenWatch: () => dispatch(refreshTokenWatch()),
  getMe: () => dispatch(getMeRequest()),
  getProjects: () => dispatch(getProjectsRequest()),
  openChat: () => dispatch(changeModal('chat', { show: true }))
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Dashboard))
