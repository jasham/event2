import client, {token} from '../../config'

import { GET_MESSAGE_INVITATION_API } from '../../apis'
import { baseUrl } from '../../config'
import {   GET_MESSAGE_INVITATION,   ERROR_TYPE } from '../../types'

export const getMessageInvitation = () =>{
    return async dispatch => {
        return client().get(`${GET_MESSAGE_INVITATION_API}`).then((res) => {
            console.log("Engineer data",res)
            dispatch({
                type : GET_MESSAGE_INVITATION,
                data : res.data
            })
        }).catch((err)=>{
            dispatch({
                type : ERROR_TYPE,
                data : err.data
            })
        })
    }
}