
import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import SearchList from './SearchList'
import { withStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import { debounce } from 'debounce'

const styles = theme => ({
  wrapper: {
    position: 'relative'
  },
  list: {
    position: 'absolute',
    top: '100%',
    left: '0'
  },
  loader: {
    textAlign: 'center',
    marginBottom: theme.spacing.unit
  }
})

export class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [...props.selectedItems],
      focus: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
    this.searchChange = this.searchChange.bind(this)
  }

  setValue() {
    const { setFieldValue, setFieldTouched, name } = this.props
    const newValues = this.state.items.map(item => item.id)
    setFieldValue(name, newValues)
    setFieldTouched(name, true)
  }

  handleChange(id) {
    const items = this.state.items
    const itemIndex = items.findIndex(item => item.id === id)
    if (itemIndex !== -1) {
      items.splice(itemIndex, 1)
    } else {
      const newItem = this.props.items.find(item => item.id === id)
      items.push(newItem)
    }
    this.setState({ items })
    this.setValue()
  }

  handleFocus(focus) {
    this.setState({
      focus
    })
  }

  searchChange(e) {
    debounce(() => {
      this.props.getNewItems(e.target.value)
    }, 300)
  }

  render() {
    const { label, helperText, error, items, classes, loading } = this.props
    return (
      <div className={classes.wrapper}>
        {loading &&
          <div className={classes.loader}>
            <CircularProgress color="primary" />
          </div>
        }
        <TextField
          type="search"
          label={label}
          error={error}
          helperText={helperText}
          onFocus={() => this.handleFocus(true)}
          onBlur={() => this.handleFocus(false)}
          onChange={this.searchChange}
          disabled={loading}
        />
        <SearchList
          items={items}
          selectedItems={this.state.items}
          handleClick={this.handleChange}
          className={classes.list}
          focus={this.state.focus}
        />
      </div>
    )
  }
}

Search.propTypes = {
  items: PropTypes.array.isRequired,
  selectedItems: PropTypes.array.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  helperText: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  getNewItems: PropTypes.func.isRequired
}

export default withStyles(styles)(Search)
