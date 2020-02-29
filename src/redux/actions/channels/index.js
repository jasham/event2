import client, {token} from '../../config'
import axios from 'axios'
import { ENVIRONMENT_API } from '../../apis'
import { baseUrl } from '../../config'
import { ENVIRONMENT_DATA } from '../../types'

export const getEnv = (data) =>{
    return async dispatch => {
        return client().get(`${ENVIRONMENT_API}`).then((res) => {
            dispatch({
                type : ENVIRONMENT_DATA,
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