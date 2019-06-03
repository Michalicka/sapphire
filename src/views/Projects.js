
import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import ProjectsContainer from '../containers/ProjectsContainer'
import CreateProjectDialog from '../containers/CreateProjectDialog'
import EditProjectDialog from '../containers/EditProjectDialog'
import CreateProjectButton from '../containers/CreateProjectButton'

export const Projects = () => {
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
          <ProjectsContainer />
        </Grid>
      </Grid>
      <CreateProjectDialog />
      <CreateProjectButton />
      <EditProjectDialog />
    </React.Fragment>
  )
}

export default Projects
