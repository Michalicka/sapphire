
import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import ProjectsContainer from '../containers/ProjectsContainer'
import CreateProjectDialog from '../containers/CreateProjectDialog'
import EditProjectDialog from '../containers/EditProjectDialog'
import CreateProjectButton from '../containers/CreateProjectButton'
import { tasks as tasksLink, tasksTypes } from '../routes'

export const Projects = ({ match }) => {
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
          <Typography
            variant="h4"
            color="primary"
          >Projects</Typography>
        </Grid>
        <Grid
          item
          xs={12}
        >
          <ProjectsContainer
            baseUrl={`${match.url}${tasksLink.replace(':type', tasksTypes[0].name)}`}
          />
        </Grid>
      </Grid>
      <CreateProjectDialog />
      <CreateProjectButton />
      <EditProjectDialog />
    </React.Fragment>
  )
}

Projects.propTypes = {
  match: PropTypes.object.isRequired
}

export default Projects
