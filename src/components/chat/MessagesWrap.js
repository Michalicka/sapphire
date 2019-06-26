
import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import MessagesItem from './MessagesItem'
import MessagesForm from './MessagesForm'
import { withStyles } from '@material-ui/core'

const styles = theme => ({
  list: {
    height: 220,
    overflow: 'auto',
    marginBottom: theme.spacing.unit * 2
  }
})

const MessagesWrap = ({ messages, postMessages, postMessagesLoading, className, errors, getMessages, actualConversation, getMessagesLoading, myId, classes }) => {
  const listRef = useRef()

  useEffect(() => {
    getMessages(actualConversation)
  }, [])

  useEffect(() => {
    const { clientHeight, scrollHeight } = listRef.current
    listRef.current.scrollTop = scrollHeight - clientHeight
  })

  return (
    <div className={className}>
      <div
        className={classes.list}
        ref={listRef}
      >
        {messages.map(message => (
          <MessagesItem
            key={message.id}
            item={message}
            myId={myId}
          />
        ))}
      </div>
      <div>
        <MessagesForm
          postMessages={postMessages}
          postMessagesLoading={postMessagesLoading}
          actualConversation={actualConversation}
          errors={errors}
        />
      </div>
    </div>
  )
}

MessagesWrap.propTypes = {
  messages: PropTypes.array.isRequired,
  postMessages: PropTypes.func.isRequired,
  postMessagesLoading: PropTypes.bool.isRequired,
  className: PropTypes.string,
  errors: PropTypes.object.isRequired,
  getMessages: PropTypes.func.isRequired,
  getMessagesLoading: PropTypes.bool.isRequired,
  actualConversation: PropTypes.number.isRequired,
  myId: PropTypes.number,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(MessagesWrap)
