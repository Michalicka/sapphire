
import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import ProjectsContainer from '../containers/ProjectsContainer'
import CreateProjectDialog from '../containers/CreateProjectDialog'
import { connect } from 'react-redux'
import CreateProjectButton from '../containers/CreateProjectButton'

const styles = theme => ({
})

const options = [
  {
    key: 0,
    title: 'Edit',
    clickHandler: () => console.log('edit')
  },
  {
    key: 1,
    title: 'Edit members',
    clickHandler: () => console.log('edit members')
  },
  {
    key: 2,
    title: 'Delete',
    clickHandler: () => console.log('delete')
  }
]

export const Projects = ({ classes, dispatch }) => {
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
            options={options}
          />
        </Grid>
      </Grid>
      <CreateProjectDialog />
      <CreateProjectButton />
    </React.Fragment>
  )
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}

export default connect()(withStyles(styles)(Projects))
