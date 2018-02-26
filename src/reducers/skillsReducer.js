import initialState from './initialState'
import {
    ADD_NEW_SKILL_SUCCESS,
    REMOVE_SKILL_SUCCESS
} from '../constants/actionTypes'

export default (state = initialState.skills, action) => {
    switch (action.type) {
        case ADD_NEW_SKILL_SUCCESS:
            return [
                ...state,
                action.payload
            ];
        case REMOVE_SKILL_SUCCESS:
            return state.filter(skill => skill.id !== action.payload);
        default:
            return state
    }
}