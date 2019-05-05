
import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import CardContainer from '../components/CardContainer'

const styles = theme => ({})

const projects = [
  {
    id: 1,
    title: 'Project',
    description: 'Lorem ipsum'
  },
  {
    id: 2,
    title: 'Project2',
    description: 'Lorem ipsum'
  },
  {
    id: 3,
    title: 'Project3',
    description: 'Lorem ipsum'
  }
]

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

export const Projects = ({ classes, match }) => {
  return (
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
        <CardContainer
          items={projects}
          options={options}
        />
      </Grid>
    </Grid>
  )
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
}

export default withStyles(styles)(Projects)
