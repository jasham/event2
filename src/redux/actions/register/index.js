import client, {token} from '../../config'
import { REGISTER_GUEST_API } from '../../apis'
import { REGISTER_USER } from '../../types'

export const registerUser = (data) =>{
    return async dispatch => {
        return client().post(`${REGISTER_GUEST_API}`,data).then((res) => {
            console.log("I am success",data)
            dispatch({
                type : REGISTER_USER,
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