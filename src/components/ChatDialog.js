
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Dialog, DialogTitle, DialogContent, CircularProgress, withStyles, Fab, Button } from '@material-ui/core'
import { Add as AddIcon, KeyboardArrowLeft as KeyboardArrowLeftIcon } from '@material-ui/icons/'
import ConversationsList from './ConversationsList'
import MessagesWrap from './MessagesWrap'
import ConversationForm from './ConversationForm'

const styles = theme => ({
  toolbar: {
    minHeight: 0
  },
  wrap: {
    textAlign: 'left',
    position: 'relative'
  },
  profileText: {
    paddingLeft: theme.spacing.unit
  },
  item: {
    marginBottom: theme.spacing.unit * 2
  },
  content: {
    marginBottom: theme.spacing.unit * 4
  },
  loading: {
    textAlign: 'center'
  },
  createButton: {
    position: 'absolute',
    right: theme.spacing.unit * 3,
    bottom: theme.spacing.unit * 3
  },
  title: {
    verticalAlign: 'middle'
  },
  buttonBack: {
    marginBottom: theme.spacing.unit
  }
})

export const ChatDialog = ({ conversations, messages, actualConversation, getConversations, getMessages, postConversations, postMessages, getConversationsLoading, postConversationsLoading, getMessagesLoading, postMessagesLoading, classes, handleClose, postMessagesErrors, changeActualConversation, postConversationsErrors, myId, changeMessages }) => {
  useEffect(() => {
    getConversations()
  }, [])

  console.log(actualConversation)

  const [creation, setCreation] = useState(false)

  const conversation = conversations.find(item => item.id === actualConversation)

  const conversationRecipients = conversation ? conversation.recipients.reduce((accumulator, currentValue) => `${accumulator} ${currentValue.name}`, '- ') : ''

  return (
    <Dialog
      open={true}
      onClose={handleClose}
      maxWidth="sm"
      scroll="body"
    >
      <DialogTitle className={classes.title}>
        Chat {conversationRecipients}
      </DialogTitle>
      <DialogContent className={classes.wrap}>
        {(creation || actualConversation) &&
          <Button
            className={classes.buttonBack}
            onClick={() => {
              setCreation(false)
              changeMessages([])
              changeActualConversation(null)
            }}
          >
            <KeyboardArrowLeftIcon />
            Back
          </Button>
        }
        {(getConversationsLoading || getMessagesLoading || postConversationsLoading) &&
          <div className={classes.loading}>
            <CircularProgress
              color="primary"
            />
          </div>
        }
        {!actualConversation && !creation &&
          <div>
            <ConversationsList
              conversations={conversations}
              handleClick={id => changeActualConversation(id)}
              loading={getConversationsLoading}
            />
            <Fab
              color="secondary"
              className={classes.createButton}
              onClick={() => setCreation(true)}
            >
              <AddIcon />
            </Fab>
          </div>
        }
        {actualConversation &&
          <MessagesWrap
            messages={messages}
            postMessages={postMessages}
            getMessages={getMessages}
            postMessagesLoading={postMessagesLoading}
            getMessagesLoading={getMessagesLoading}
            actualConversation={actualConversation}
            errors={postMessagesErrors}
            myId={myId}
          />
        }
        {creation &&
          <ConversationForm
            send={postConversations}
            errors={postConversationsErrors}
            setCreation={setCreation}
          />
        }
      </DialogContent>
    </Dialog >
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
  changeMessages: PropTypes.func.isRequired
}

export default withStyles(styles)(ChatDialog)
