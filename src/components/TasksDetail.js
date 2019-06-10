
import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  title: {
    marginBottom: theme.spacing.unit * 2
  }
})

const TasksDetail = ({ title, description, classes, className }) => {
  return (
    <div
      className={className}
    >
      <Typography
        variant="h4"
        color="primary"
        className={classes.title}
      >{title}</Typography>
      <Typography
        variant="body1"
      >{description}</Typography>
    </div>
  )
}

TasksDetail.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
}

export default withStyles(styles)(TasksDetail)
