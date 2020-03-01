import { combineReducers } from 'redux'
import userList from './messages'
import getMessageInvitationList from './getMessageInvitation/getMessageInvitation'
import getMessageRequestList from './getMessageRequest/getMessageRequest'

export const appReducer = combineReducers({
  userList,
  getMessageInvitationList,
  getMessageRequestList

})

