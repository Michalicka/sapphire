
import React from 'react'
import PropTypes from 'prop-types'
import TasksDetail from '../containers/TasksDetail'
import Grid from '@material-ui/core/Grid'

const Tasks = ({ match }) => {
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
          <TasksDetail id={match.params.id} />
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
  match: PropTypes.object.isRequired
}

export default Tasks
