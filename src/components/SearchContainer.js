
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Search from './Search'

const SearchContainer = ({ items, changeItems, selectedItems, changeSelectedItems, getSelectedItems, name, setFieldValue, setFieldTouched, oneOnly, search, id, ...others }) => {
  const [valueIsEmpty, setValueIsEmpty] = useState(true)

  useEffect(() => {
    const value = oneOnly ? selectedItems[0].id : selectedItems.map(item => item.id)
    setFieldValue(name, value)
    setFieldTouched(name, true)
  }, [selectedItems])

  useEffect(() => {
    getSelectedItems(id)
  }, [])

  const selectedItemsHandler = item => {
    if (oneOnly) {
      const newItem = item.id !== selectedItems[0].id ? item : null
      changeSelectedItems(newItem)
    } else {
      const index = selectedItems.findIndex(selectedItem => selectedItem.id === item.id)
      const newSelectedItems = [...selectedItems]
      if (index === -1) {
        newSelectedItems.push(item)
      } else {
        newSelectedItems.splice(index, 1)
      }
      changeSelectedItems(id, newSelectedItems)
    }
  }

  const searchHandler = value => {
    if (value !== '') {
      setValueIsEmpty(false)
      search(value)
    } else {
      setValueIsEmpty(true)
    }
  }

  return (
    <Search
      items={valueIsEmpty ? selectedItems : items}
      selectedItems={selectedItems}
      changeSelectedItems={selectedItemsHandler}
      search={searchHandler}
      name={name}
      {...others}
    />
  )
}

SearchContainer.propTypes = {
  items: PropTypes.array,
  selectedItems: PropTypes.array.isRequired,
  oneOnly: PropTypes.bool,
  name: PropTypes.string.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
  changeItems: PropTypes.func.isRequired,
  changeSelectedItems: PropTypes.func.isRequired,
  getSelectedItems: PropTypes.func.isRequired,
  id: PropTypes.number
}

export default SearchContainer
