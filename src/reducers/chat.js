
import { CHANGE_CONVERSATIONS, ADD_CONVERSATION, CHANGE_MESSAGES, ADD_MESSAGE } from '../actionTypes/chat'
import { changeDataParam, pushToDataParam, getDefaultValues } from './utils'

const chatDefaultValues = getDefaultValues(['getConversations', 'postConversations', 'getMessages', 'postMessages'])

const initialState = {
  data: {
    conversations: [],
    messages: null
  },
  loading: chatDefaultValues({ show: false }),
  error: chatDefaultValues({})
}

export default function chat(state = initialState, action) {
  switch (action.type) {
    case (CHANGE_CONVERSATIONS || CHANGE_MESSAGES):
      return changeDataParam(state, action)
    case (ADD_CONVERSATION || ADD_MESSAGE):
      return pushToDataParam(state, action)
    default:
      return state
  }
}
