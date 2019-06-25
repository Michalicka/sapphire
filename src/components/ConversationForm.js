
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'
import { fieldProps } from '../utils'
import UsersSearch from '../containers/UsersSearch'
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

const ConversationForm = ({ send, errors, classes, setCreation }) => {
  const [selectedItems, setSelectedItems] = useState([])
  return (
    <Formik
      initialValues={{ recipients: '' }}
      onSubmit={values => {
        send(values)
        setCreation(false)
      }}
      render={formData => {
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
      }}
    />
  )
}

ConversationForm.propTypes = {
  send: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  setCreation: PropTypes.func.isRequired
}

export default withStyles(styles)(ConversationForm)
