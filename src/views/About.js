
import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import Counter from '../containers/Counter'

const styles = theme => {
  return {
    content: {
      textAlign: 'center'
    },
    link: {
      color: theme.palette.primary.main
    }
  }
}

export const About = ({ classes }) => {
  return (
    <div className={classes.content}>
      <h1>About</h1>
      <Link
        className={classes.link}
        to="/home"
      >Home</Link>
      <Counter />
    </div>
  )
}

About.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(About)
