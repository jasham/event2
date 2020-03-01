import { GET_VENU_DEAILS } from '../../types'


export default (state = {}, action) => {
    switch (action.type) {
        case GET_VENU_DEAILS :
            return {...state, ...action.data}
        default:
            return state
    }
}

