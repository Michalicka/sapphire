
import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import SearchList from './SearchList'
import { withStyles } from '@material-ui/core/styles'

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

export class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      itemsLoaded: false,
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.searchChange = this.searchChange.bind(this)
  }

  componentDidMount() {
    this.props.getItems(this.props.id)
  }

  componentDidUpdate() {
    const { items, itemsLoaded } = this.state
    if (!itemsLoaded) {
      const { selectedItems } = this.props
      const itemsEqual = selectedItems.every((item, index) => item === items[index]) && selectedItems.length === items.length
      if (!itemsEqual) {
        this.setState({ items: [...selectedItems], itemsLoaded: true }, () => {
          this.setValue()
        })
      }
    }
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
    this.setState({ items }, this.setValue)
  }

  searchChange(e) {
    const { value } = e.currentTarget
    if (value === '') {
      this.props.changeItems([])
    } else {
      this.props.getNewItems(e.currentTarget.value)
    }
    this.setState({
      value
    })
  }

  render() {
    const { label, helperText, error, items, classes, loading } = this.props
    return (
      <div className={classes.wrapper}>
        <TextField
          type="search"
          label={label}
          error={error}
          helperText={helperText}
          onChange={this.searchChange}
          disabled={loading}
          fullWidth
        />
        <SearchList
          items={items}
          selectedItems={this.state.items}
          handleClick={this.handleChange}
          className={classes.list}
          value={this.state.value}
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
  getNewItems: PropTypes.func.isRequired,
  getItems: PropTypes.func.isRequired,
  changeItems: PropTypes.func.isRequired,
  id: PropTypes.number
}

export default withStyles(styles)(Search)
