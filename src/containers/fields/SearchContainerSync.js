
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import SearchContainer from './SearchContainer'

const SearchContainerSync = ({ items, ...others }) => {
  const [filter, setFilter] = useState('')
  const reg = filter !== '' ? new RegExp(`^${filter}(\\w?)+`) : new RegExp('')

  return (
    <SearchContainer
      items={items.filter(item => filter !== '' && reg.test(item.name.toLowerCase()))}
      search={setFilter}
      {...others}
    />
  )
}

SearchContainerSync.propTypes = {
  items: PropTypes.array.isRequired
}

export default SearchContainerSync
