
import { CHANGE_CONVERSATIONS, ADD_CONVERSATION, CHANGE_MESSAGES, ADD_MESSAGE, GET_CONVERSATIONS_REQUEST, POST_CONVERSATIONS_REQUEST, GET_MESSAGES_REQUEST, POST_MESSAGES_REQUEST, TOGGLE_CHAT_LOADING, CHANGE_CHAT_ERRORS, CHANGE_ACTUAL_CONVERSATION } from '../actionTypes/chat'

const converastionsKey = 'conversations'

export const changeConversations = value => ({
  type: CHANGE_CONVERSATIONS,
  key: converastionsKey,
  value
})

export const addConversation = value => ({
  type: ADD_CONVERSATION,
  key: converastionsKey,
  value
})

const messagesKey = 'messages'

export const changeMessages = value => ({
  type: CHANGE_MESSAGES,
  key: messagesKey,
  value
})

export const addMessage = value => ({
  type: ADD_MESSAGE,
  key: messagesKey,
  value
})

export const getConversationsRequest = () => ({
  type: GET_CONVERSATIONS_REQUEST
})

export const postConversationsRequest = payload => ({
  type: POST_CONVERSATIONS_REQUEST,
  payload
})

export const getMessagesRequest = urlParams => ({
  type: GET_MESSAGES_REQUEST,
  urlParams
})

export const postMessagesRequest = (urlParams, payload) => ({
  type: POST_MESSAGES_REQUEST,
  urlParams,
  payload
})

export const toggleChatLoading = key => value => ({
  type: TOGGLE_CHAT_LOADING,
  key,
  value
})

export const changeChatErrors = key => value => ({
  type: CHANGE_CHAT_ERRORS,
  key,
  value
})

export const changeActualConversation = value => ({
  type: CHANGE_ACTUAL_CONVERSATION,
  key: 'actualConversation',
  value
})
