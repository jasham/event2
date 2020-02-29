import { ENVIRONMENT_DATA } from '../../types'


export default (state = {}, action) => {
    switch (action.type) {
        case GET_USER :
            return {...state, ...action.data}
        default:
            return state
    }
}

