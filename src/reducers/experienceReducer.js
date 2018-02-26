import initialState from './initialState'
import {
    ADD_NEW_EXPERIENCE_SUCCESS,
    REMOVE_EXPERIENCE_SUCCESS
} from '../constants/actionTypes'

export default (state = initialState.experience, action) => {
    switch (action.type) {
        case ADD_NEW_EXPERIENCE_SUCCESS:
            return [
                ...state,
                action.payload
            ];
        case REMOVE_EXPERIENCE_SUCCESS:
            return state.filter(experience => experience.id !== action.payload);
        default:
            return state
    }
}