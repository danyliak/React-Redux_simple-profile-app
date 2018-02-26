import initialState from './initialState'
import {
    CHANGE_MAIN_INFORMATION
} from '../constants/actionTypes'

export default (state = initialState.mainInfo, action) => {
    switch (action.type) {
        case CHANGE_MAIN_INFORMATION:
            const {name, value} = action.payload;
            return {
                ...state,
                [name]: value
            };
        default:
            return state
    }
}