
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import ChatDialogContent from './ChatDialogContent'

export const ChatDialog = ({ getConversations, ...others }) => {
  useEffect(() => {
    getConversations()
  }, [])

  const [creation, setCreation] = useState(false)

  return (
    <ChatDialogContent
      creation={creation}
      setCreation={setCreation}
      {...others}
    />
  )
}

ChatDialog.propTypes = {
  conversations: PropTypes.array.isRequired,
  messages: PropTypes.array,
  actualConversation: PropTypes.number,
  getConversations: PropTypes.func.isRequired,
  getMessages: PropTypes.func.isRequired,
  postConversations: PropTypes.func.isRequired,
  postMessages: PropTypes.func.isRequired,
  getConversationsLoading: PropTypes.bool.isRequired,
  postConversationsLoading: PropTypes.bool.isRequired,
  getMessagesLoading: PropTypes.bool.isRequired,
  postMessagesLoading: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
  postMessagesErrors: PropTypes.object.isRequired,
  postConversationsErrors: PropTypes.object.isRequired,
  changeActualConversation: PropTypes.func.isRequired,
  myId: PropTypes.number,
  changeMessages: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
}

export default ChatDialog
