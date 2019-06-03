
import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

const TasksDetail = ({ title, description }) => {
  return (
    <React.Fragment>
      <Typography
        variant="h4"
        color="primary"
      >{title}</Typography>
      <Typography
        variant="body1"
        color="primary"
      >{description}</Typography>
    </React.Fragment>
  )
}

TasksDetail.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default TasksDetail
