
import React, { useState } from 'react'
import SearchContainerSync from './SearchContainerSync'

const SearchContainerSyncState = (props) => {
  const [selectedItems, setSelectedItems] = useState(null)
  console.log({
    selectedItems
  })
  return (
    <SearchContainerSync
      selectedItems={selectedItems !== null ? [selectedItems] : []}
      changeSelectedItems={(...args) => setSelectedItems(args[1])}
      {...props}
    />
  )
}

export default SearchContainerSyncState
