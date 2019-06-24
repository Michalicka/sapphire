
import { CHANGE_CONVERSATIONS, ADD_CONVERSATION, CHANGE_MESSAGES, ADD_MESSAGE, GET_CONVERSATIONS_REQUEST, POST_CONVERSATIONS_REQUEST, GET_MESSAGES_REQUEST, POST_MESSAGES_REQUEST } from '../actionTypes/chat'

const converastionsKey = 'conversations'

export function changeConversations(value) {
  return {
    type: CHANGE_CONVERSATIONS,
    key: converastionsKey,
    value
  }
}

export function addConversation(value) {
  return {
    type: ADD_CONVERSATION,
    key: converastionsKey,
    value
  }
}

const messagesKey = 'messages'

export function changeMessages(value) {
  return {
    type: CHANGE_MESSAGES,
    key: messagesKey,
    value
  }
}

export function addMessage(value) {
  return {
    type: ADD_MESSAGE,
    key: messagesKey,
    value
  }
}

export function getConversationsRequest() {
  return {
    type: GET_CONVERSATIONS_REQUEST
  }
}

export function postConversationsRequest(payload) {
  return {
    type: POST_CONVERSATIONS_REQUEST,
    payload
  }
}

export function getMessagesRequest(urlParams) {
  return {
    type: GET_MESSAGES_REQUEST,
    urlParams
  }
}

export function postMessagesRequest(urlParams, payload) {
  return {
    type: POST_MESSAGES_REQUEST,
    urlParams,
    payload
  }
}
