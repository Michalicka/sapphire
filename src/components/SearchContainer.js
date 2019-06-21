
import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import Search from './Search'

const SearchContainer = ({ items, selectedItems, changeSelectedItems, getSelectedItems, name, setFieldValue, setFieldTouched, oneOnly, search, id, ...others }) => {
  const [valueIsEmpty, setValueIsEmpty] = useState(true)
  const selectedItemsRef = useRef(selectedItems)

  useEffect(() => {
    if (selectedItems !== selectedItemsRef.current) {
      let value
      if (oneOnly) {
        value = selectedItems[0] ? selectedItems[0].id : null
      } else {
        value = selectedItems.map(item => item.id)
      }
      selectedItemsRef.current = selectedItems
      console.log({
        name,
        value
      })
      setFieldValue(name, value)
      setFieldTouched(name, true)
    }
  }, [selectedItems, oneOnly, name])

  useEffect(() => {
    if (getSelectedItems) {
      getSelectedItems(id)
    }
  }, [])

  const selectedItemsHandler = item => {
    if (oneOnly) {
      const newItem = !selectedItems[0] || item.id !== selectedItems[0].id ? item : null
      changeSelectedItems(id, newItem)
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
  changeSelectedItems: PropTypes.func.isRequired,
  getSelectedItems: PropTypes.func,
  id: PropTypes.number
}

export default SearchContainer
