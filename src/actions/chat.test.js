
import { CHANGE_CONVERSATIONS, ADD_CONVERSATION, CHANGE_MESSAGES, ADD_MESSAGE, GET_CONVERSATIONS_REQUEST, POST_CONVERSATIONS_REQUEST, GET_MESSAGES_REQUEST, POST_MESSAGES_REQUEST, TOGGLE_CHAT_LOADING, CHANGE_CHAT_ERRORS, CHANGE_ACTUAL_CONVERSATION } from '../actionTypes/chat'
import { changeConversations, addConversation, changeMessages, addMessage, getConversationsRequest, postConversationsRequest, getMessagesRequest, postMessagesRequest, toggleChatLoading, changeChatErrors, changeActualConversation } from './chat'

const converastionsKey = 'conversations'
const messagesKey = 'messages'

describe('chat actions', () => {
  it('changeConversations', () => {
    const value = []
    const expectedValue = {
      type: CHANGE_CONVERSATIONS,
      key: converastionsKey,
      value
    }

    expect(changeConversations(value)).toEqual(expectedValue)
  })

  it('addConversation', () => {
    const value = {}
    const expectedValue = {
      type: ADD_CONVERSATION,
      key: converastionsKey,
      value
    }

    expect(addConversation(value)).toEqual(expectedValue)
  })

  it('changeMessages', () => {
    const value = []
    const expectedValue = {
      type: CHANGE_MESSAGES,
      key: messagesKey,
      value
    }

    expect(changeMessages(value)).toEqual(expectedValue)
  })

  it('addMessage', () => {
    const value = {}
    const expectedValue = {
      type: ADD_MESSAGE,
      key: messagesKey,
      value
    }

    expect(addMessage(value)).toEqual(expectedValue)
  })

  it('getConversationsRequest', () => {
    const expectedValue = {
      type: GET_CONVERSATIONS_REQUEST
    }

    expect(getConversationsRequest()).toEqual(expectedValue)
  })

  it('postConversationsRequest', () => {
    const payload = {}
    const expectedValue = {
      type: POST_CONVERSATIONS_REQUEST,
      payload
    }

    expect(postConversationsRequest(payload)).toEqual(expectedValue)
  })

  it('getMessagesRequest', () => {
    const urlParams = { id: 1 }
    const expectedValue = {
      type: GET_MESSAGES_REQUEST,
      urlParams
    }

    expect(getMessagesRequest(urlParams)).toEqual(expectedValue)
  })

  it('postMessagesRequest', () => {
    const urlParams = { id: 1 }
    const payload = {}
    const expectedValue = {
      type: POST_MESSAGES_REQUEST,
      urlParams,
      payload
    }

    expect(postMessagesRequest(urlParams, payload)).toEqual(expectedValue)
  })

  it('toggleChatLoading', () => {
    const key = 'key'
    const value = true
    const expectedValue = {
      type: TOGGLE_CHAT_LOADING,
      key,
      value
    }

    expect(toggleChatLoading(key)(value)).toEqual(expectedValue)
  })

  it('changeChatErrors', () => {
    const key = 'key'
    const value = {}
    const expectedValue = {
      type: CHANGE_CHAT_ERRORS,
      key,
      value
    }

    expect(changeChatErrors(key)(value)).toEqual(expectedValue)
  })

  it('changeActualConversation', () => {
    const value = 1
    const expectedValue = {
      type: CHANGE_ACTUAL_CONVERSATION,
      key: 'actualConversation',
      value
    }

    expect(changeActualConversation(value)).toEqual(expectedValue)
  })
})
