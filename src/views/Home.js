
import React from 'react'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'

export const Home = ({ classes }) => {
  return (
    <div className={classes.content}>
      <h1>Hello world</h1>
      <Button variant="contained" color="primary">Button</Button>
      <Button variant="contained" color="secondary">Button</Button>
    </div>
  )
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
}

export default Home
