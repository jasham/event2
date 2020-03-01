import { GET_MESSAGE_REQUEST} from '../../types'


export default (state = {}, action) => {
    switch (action.type) {
        case GET_MESSAGE_REQUEST :
            return {...state, ...action.data}
        default:
            return state
    }
}