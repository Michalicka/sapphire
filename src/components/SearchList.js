
import React from 'react'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { ListItemIcon } from '@material-ui/core'
import DoneIcon from '@material-ui/icons/Done'

export const SearchList = ({ items, selectedItems, handleClick, className }) => {
  return (
    <List
      className={className}
    >
      {
        items.map(item => (
          <ListItem
            key={item.id}
            onClick={() => handleClick(item)}
            button
          >
            <ListItemText
              primary={item.name}
            />
            {selectedItems.some(selectedItem => selectedItem.id === item.id) &&
              <ListItemIcon>
                <DoneIcon color="secondary" />
              </ListItemIcon>
            }
          </ListItem>
        ))
      }
    </List>
  )
}

SearchList.propTypes = {
  items: PropTypes.array.isRequired,
  selectedItems: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
  className: PropTypes.string
}

export default SearchList
