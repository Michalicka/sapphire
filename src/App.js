
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import withRoot from './withRoot'
import PropTypes from 'prop-types'

const styles = theme => ({
  content: {
    textAlign: 'center'
  }
})

export class App extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.content}>
        <h1>Hello world</h1>
        <Button variant="contained" color="primary">Button</Button>
        <Button variant="contained" color="secondary">Button</Button>
      </div>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withRoot(withStyles(styles)(App))
