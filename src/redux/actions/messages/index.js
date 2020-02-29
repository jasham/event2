import client, {token} from '../../config'
import { GET_USER_API } from '../../apis'
import { baseUrl } from '../../config'
import { GET_USER } from '../../types'

export const getUserList = () =>{
    return async dispatch => {
        return client().get(`${GET_USER_API}`).then((res) => {
            dispatch({
                type : GET_USER,
                data : res.data
            })
        }).catch((err)=>{
            // dispatch({
            //     type : ERROR_TYPE,
            //     data : err.data
            // })
        })
    }
}