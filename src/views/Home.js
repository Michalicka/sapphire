
import React from 'react'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const styles = theme => ({
  content: {
    textAlign: 'center'
  }
})

export const Home = ({ classes }) => {
  return (
    <div className={classes.content}>
      <h1>Hello world</h1>
      <Link to="/about">
        <Button variant="contained" color="primary">About</Button>
      </Link>

      <Button variant="contained" color="secondary">Button</Button>
    </div>
  )
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Home)
