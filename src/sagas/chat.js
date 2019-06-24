
import { fetchLoggedEntity } from './utils'
import { put } from 'redux-saga/effects'
import { conversations as conversationsLink, messages as messagesLink } from '../apiLinks'
import { GET_CONVERSATIONS_REQUEST, POST_CONVERSATIONS_REQUEST, GET_MESSAGES_REQUEST, POST_MESSAGES_REQUEST } from '../actionTypes/chat'
import { changeConversations, changeChatErrors, toggleChatLoading, addConversation, changeMessages, addMessage } from '../actions/chat'

const getConversationsKey = 'getConversations'
const getConversationsErrors = changeChatErrors(getConversationsKey)
const getConversationsLoading = toggleChatLoading(getConversationsKey)

export const getConversations = fetchLoggedEntity.bind(
  null,
  'get',
  conversationsLink,
  {
    request: GET_CONVERSATIONS_REQUEST,
    success: [
      ({ data }) => put(changeConversations(data.data)),
      () => put(getConversationsErrors({}))
    ],
    error: getConversationsErrors,
    loading: getConversationsLoading
  }
)

const postConversationsKey = 'postConversations'
const postConversationsErrors = changeChatErrors(postConversationsKey)
const postConversationsLoading = toggleChatLoading(postConversationsKey)

export const postConversations = fetchLoggedEntity.bind(
  null,
  'post',
  conversationsLink,
  {
    request: POST_CONVERSATIONS_REQUEST,
    success: [
      ({ data }) => put(addConversation(data.data)),
      () => put(postConversationsErrors({}))
    ],
    error: postConversationsErrors,
    loading: postConversationsLoading
  }
)

const getMessagesKey = 'getMessages'
const getMessagesErrors = changeChatErrors(getMessagesKey)
const getMessagesLoading = toggleChatLoading(getMessagesKey)

export const getMessages = fetchLoggedEntity.bind(
  null,
  'get',
  messagesLink,
  {
    request: GET_MESSAGES_REQUEST,
    success: [
      ({ data }) => put(changeMessages(data.data)),
      () => put(getMessagesErrors({}))
    ],
    error: getMessagesErrors,
    loading: getMessagesLoading
  }
)

const postMessagesKey = 'postMessages'
const postMessagesErrors = changeChatErrors(postMessagesKey)
const postMessagesLoading = toggleChatLoading(postMessagesKey)

export const postMessages = fetchLoggedEntity.bind(
  null,
  'post',
  messagesLink,
  {
    request: POST_MESSAGES_REQUEST,
    success: [
      ({ data }) => put(addMessage(data.data)),
      () => put(postMessagesErrors)
    ],
    error: postMessagesErrors,
    loading: postMessagesLoading
  }
)
