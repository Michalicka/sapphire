
import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import SearchList from './SearchList'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'

const styles = theme => ({
  wrapper: {
    position: 'relative'
  },
  list: {
    maxHeight: 125,
    overflow: 'auto',
    paddingBottom: 0
  },
  loader: {
    textAlign: 'center',
    marginBottom: theme.spacing.unit
  }
})

export function Search({ classes, label, error, loading, helperText, search, items, selectedItems, changeSelectedItems, className }) {
  return (
    <div className={classNames(classes.wrapper, className)}>
      <TextField
        type="search"
        label={label}
        error={error}
        helperText={helperText}
        onChange={e => search(e.currentTarget.value)}
        disabled={loading}
        fullWidth
      />
      <SearchList
        items={items}
        selectedItems={selectedItems}
        handleClick={changeSelectedItems}
        className={classes.list}
      />
    </div>
  )
}

Search.propTypes = {
  items: PropTypes.array.isRequired,
  selectedItems: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  helperText: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  id: PropTypes.number,
  search: PropTypes.func.isRequired,
  changeSelectedItems: PropTypes.func.isRequired,
  className: PropTypes.string
}

export default withStyles(styles)(Search)
