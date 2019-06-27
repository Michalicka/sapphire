
import React from 'react'
import PropTypes from 'prop-types'
import { List, ListItem, ListItemText } from '@material-ui/core'
import DateFnsUtils from '@date-io/date-fns'

const TaskDetailHistory = ({ list, className }) => {
  const DateFormatter = new DateFnsUtils()
  return (
    <List className={className}>
      {list.map(item => (
        <ListItem
          key={item.id}
          disableGutters
        >
          <ListItemText
            primary={item.content}
            secondary={DateFormatter.format(new Date(item.changed_at), 'd MMMM yyyy HH:mm:ss')}
          />
        </ListItem>
      ))}
    </List>
  )
}

TaskDetailHistory.propTypes = {
  list: PropTypes.array.isRequired,
  className: PropTypes.string
}

export default TaskDetailHistory
