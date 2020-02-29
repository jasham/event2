import client, {token} from '../../config'
import { LOGIN_API } from '../../apis'
import { baseUrl } from '../../config'
import { LOGIN_TYPE, ERROR_TYPE } from '../../types'

export const loginUser = (data) =>{
    return async dispatch => {
        return client().post(`${LOGIN_API}`, data).then((res) => {
            dispatch({
                type : LOGIN_TYPE,
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