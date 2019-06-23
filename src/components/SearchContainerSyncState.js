
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import SearchContainerSync from './SearchContainerSync'

const SearchContainerSyncState = ({ value, items, ...others }) => {
  const [selectedItems, setSelectedItems] = useState(null)
  useEffect(() => {
    if (value) {
      const selectedItem = items.find(item => item.id === value)
      setSelectedItems(selectedItem)
    }
  }, [])
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
