
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import SearchContainerSync from './SearchContainerSync'

const SearchContainerSyncState = ({ value, items, ...others }) => {
  const [selectedItems, setSelectedItems] = useState(null)
  useEffect(() => {
    console.log({ value, items })
    if (value) {
      const selectedItem = items.find(item => item.id === value)
      console.log(selectedItem)
      setSelectedItems(selectedItem)
    }
  }, [])
  console.log({ items, value })
  return (
    <SearchContainerSync
      selectedItems={selectedItems !== null ? [selectedItems] : []}
      changeSelectedItems={(...args) => setSelectedItems(args[1])}
      value={value}
      items={items}
      {...others}
    />
  )
}

SearchContainerSyncState.propTypes = {
  value: PropTypes.number,
  items: PropTypes.array.isRequired
}

export default SearchContainerSyncState
