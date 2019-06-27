
import React from 'react'
import PropTypes from 'prop-types'
import { fieldProps } from '../../utils'
import UsersSearch from '../../containers/redux-containers/UsersSearch'
import { Button, withStyles } from '@material-ui/core'

const styles = theme => ({
  inputWrap: {
    marginBottom: theme.spacing.unit
  },
  buttonWrap: {
    textAlign: 'right'
  },
  primaryButton: {
    marginRight: theme.spacing.unit
  }
})

const ConversationFormContent = ({ formData, selectedItems, setSelectedItems, errors, setCreation, classes }) => {
  return (
    <form onSubmit={formData.handleSubmit}>
      <UsersSearch
        loading={false}
        selectedItems={selectedItems}
        changeSelectedItems={(id, items) => setSelectedItems(items)}
        {...fieldProps(formData, errors)('recipients')}
        setFieldValue={formData.setFieldValue}
        setFieldTouched={formData.setFieldTouched}
        className={classes.inputWrap}
      />
      <div className={classes.buttonWrap}>
        <Button
          type="submit"
          color="secondary"
          variant="contained"
          className={classes.primaryButton}
        >Create</Button>
        <Button
          color="secondary"
          onClick={() => setCreation(false)}
        >Cancel</Button>
      </div>
    </form>
  )
}

ConversationFormContent.propTypes = {
  formData: PropTypes.object.isRequired,
  selectedItems: PropTypes.array.isRequired,
  setSelectedItems: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  setCreation: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ConversationFormContent)
