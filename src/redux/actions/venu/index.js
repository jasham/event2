import client, {token} from '../../config'
import { GET_VENU_API } from '../../apis'
import { baseUrl } from '../../config'
import { GET_VENU_DEAILS } from '../../types'

export const getVenu = () =>{
    return async dispatch => {
        return client().get(`${GET_VENU_API}`).then((res) => {

            dispatch({
                type : GET_VENU_DEAILS,
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