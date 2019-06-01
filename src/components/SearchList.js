
import React from 'react'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Fade from '@material-ui/core/Fade'

export const SearchList = ({ items, selectedItems, handleClick, focus }) => {
  const open = focus && (!!selectedItems.length || !!items.length)
  const showingItems = items.length ? items : selectedItems
  return (
    <Fade in={open}>
      <List>
        {
          showingItems.map(item => (
            <ListItem
              key={item.id}
              onClick={() => handleClick(item.id)}
              selected={selectedItems.some(selectedItem => selectedItem.id === item.id)}
            >
              <ListItemAvatar>
                <Avatar
                  alt={item.name}
                  src={item.avatar}
                />
              </ListItemAvatar>
              <ListItemText
                primary={item.name}
                secondary={item.email}
              />
            </ListItem>
          ))
        }
      </List>
    </Fade>
  )
}

SearchList.propTypes = {
  items: PropTypes.array.isRequired,
  selectedItems: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
  focus: PropTypes.bool.isRequired
}

export default SearchList
