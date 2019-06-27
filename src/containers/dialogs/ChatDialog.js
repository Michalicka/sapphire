
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import ChatDialogContent from '../../components/dialogs/ChatDialogContent'

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
  getConversations: PropTypes.func.isRequired
}

export default ChatDialog
