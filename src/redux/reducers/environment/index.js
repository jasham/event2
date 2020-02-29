import { ENVIRONMENT_DATA } from '../../types'


export default (state = {}, action) => {
    switch (action.type) {
        case ENVIRONMENT_DATA :
            return {...state, ...action.data}
        default:
            return state
    }
}

