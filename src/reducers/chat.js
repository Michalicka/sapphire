
import { CHANGE_CONVERSATIONS, ADD_CONVERSATION, CHANGE_MESSAGES, ADD_MESSAGE, CHANGE_ACTUAL_CONVERSATION, TOGGLE_CHAT_LOADING, CHANGE_CHAT_ERRORS } from '../actionTypes/chat'
import { changeDataParam, pushToDataParam, getDefaultValues, changeErrorsParam, changeLoadingParam } from './utils'

const chatDefaultValues = getDefaultValues(['getConversations', 'postConversations', 'getMessages', 'postMessages'])

const initialState = {
  data: {
    conversations: [],
    messages: [],
    actualConversation: null
  },
  loading: chatDefaultValues(false),
  errors: chatDefaultValues({})
}

export default function chat(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CONVERSATIONS:
    case CHANGE_MESSAGES:
    case CHANGE_ACTUAL_CONVERSATION:
      return changeDataParam(state, action)
    case ADD_CONVERSATION:
    case ADD_MESSAGE:
      return pushToDataParam(state, action)
    case TOGGLE_CHAT_LOADING:
      return changeLoadingParam(state, action)
    case CHANGE_CHAT_ERRORS:
      return changeErrorsParam(state, action)
    default:
      return state
  }
}
