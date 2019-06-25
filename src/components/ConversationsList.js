
import React from 'react'
import PropTypes from 'prop-types'
import { List, ListItem, ListItemText } from '@material-ui/core'

const ConversationsList = ({ conversations, handleClick, className, loading }) => {
  const getName = recipients => recipients.reduce((accumulator, currentValue) => `${accumulator} ${currentValue.name}`, '')
  return (
    <List className={className}>
      {conversations.map(conversation => (
        <ListItem
          key={conversation.id}
          onClick={() => handleClick(conversation.id)}
          button
        >
          <ListItemText
            primary={getName(conversation.recipients)}
          />
        </ListItem>
      ))}
      {conversations.length === 0 && !loading &&
        <ListItem disableGutters>
          <ListItemText primary="None conversations found" />
        </ListItem>
      }
    </List >
  )
}

ConversationsList.propTypes = {
  conversations: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  loading: PropTypes.bool.isRequired
}

export default ConversationsList
