
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'

const styles = theme => ({
  button: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2
  }
})

export const CreateButton = ({ clickHandler, classes }) => {
  return (
    <Fab
      color="secondary"
      onClick={clickHandler}
      className={classes.button}
    >
      <AddIcon />
    </Fab>
  )
}

CreateButton.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(CreateButton)
