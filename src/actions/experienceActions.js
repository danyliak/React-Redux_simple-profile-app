import { createAction } from 'redux-actions'
import * as types from '../constants/actionTypes'

const addNewExperience = createAction(types.ADD_NEW_EXPERIENCE_SUCCESS);
const removeExperience = createAction(types.REMOVE_EXPERIENCE_SUCCESS);

export default {
    addNewExperience,
    removeExperience
}