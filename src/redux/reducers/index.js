import { combineReducers } from 'redux'
import userList from './messages'
import getMessageInvitationList from './getMessageInvitation/getMessageInvitation'
import getMessageRequestList from './getMessageRequest/getMessageRequest'
import venuDetails from './venu'

export const appReducer = combineReducers({
  userList,
  getMessageInvitationList,
  getMessageRequestList,
  venuDetails
})

