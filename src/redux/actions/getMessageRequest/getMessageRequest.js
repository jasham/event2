import client, {token} from '../../config'

import { GET_MESSAGE_REQUEST_API } from '../../apis'
import { baseUrl } from '../../config'
import {   GET_MESSAGE_REQUEST,   ERROR_TYPE } from '../../types'

export const getMessageRequest = () =>{
    return async dispatch => {
        return client().get(`${GET_MESSAGE_REQUEST_API}`).then((res) => {
            console.log("Engineer data",res)
            dispatch({
                type : GET_MESSAGE_REQUEST,
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