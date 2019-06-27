import { connect } from 'react-redux'
import ChatDialog from '../dialogs/ChatDialog'
import { getConversationsRequest, postConversationsRequest, getMessagesRequest, postMessagesRequest, changeActualConversation, changeMessages } from '../../actions/chat'
import { getLoading, getErrors, getData } from '../../reducers/selectors'
import { changeModal } from '../../actions/modal'

export const mapStateToProps = state => {
  const chatData = getData(state.chat)
  const chatLoading = getLoading(state.chat)
  const chatErrors = getErrors(state.chat)
  return {
    open: state.modal.chat.show,
    conversations: chatData('conversations'),
    messages: chatData('messages'),
    actualConversation: chatData('actualConversation'),
    getConversationsLoading: chatLoading('getConversations'),
    postConversationsLoading: chatLoading('postConversations'),
    getMessagesLoading: chatLoading('getMessages'),
    postMessagesLoading: chatLoading('postMessages'),
    postConversationsErrors: chatErrors('postConversations'),
    postMessagesErrors: chatErrors('postMessages'),
    myId: state.profile.data.id
  }
}

export const mapDispatchToProps = dispatch => ({
  getConversations: () => dispatch(getConversationsRequest()),
  postConversations: payload => dispatch(postConversationsRequest(payload)),
  getMessages: id => dispatch(getMessagesRequest({ id })),
  postMessages: (id, payload) => dispatch(postMessagesRequest({ id }, payload)),
  handleClose: () => dispatch(changeModal('chat', { show: false })),
  changeActualConversation: value => dispatch(changeActualConversation(value)),
  changeMessages: () => dispatch(changeMessages([]))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatDialog)
