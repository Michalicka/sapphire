
import React from 'react'
import PropTypes from 'prop-types'
import TasksDetail from '../containers/TasksDetail'
import TabsLinks from '../components/TabsLinks'
import Grid from '@material-ui/core/Grid'
import { tasksTypes } from '../routes'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  heading: {
    marginBottom: theme.spacing.unit * 4
  }
})

const Tasks = ({ match, classes }) => {
  return (
    <React.Fragment>
      <Grid
        container
        justify="center"
        spacing={16}
      >
        <Grid
          item
          xs={12}
        >
          <TasksDetail
            id={match.params.id}
            className={classes.heading}
          />
          <TabsLinks
            params={tasksTypes}
            match={match}
            baseUrl={match.path.replace(':id', match.params.id)}
          />
        </Grid>
        <Grid
          item
          xs={12}
        >
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

Tasks.propTypes = {
  match: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Tasks)
