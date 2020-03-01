import { GET_MESSAGE_INVITATION} from '../../types'


export default (state = {}, action) => {
    switch (action.type) {
        case GET_MESSAGE_INVITATION :
            return {...state, ...action.data}
        default:
            return state
    }
}