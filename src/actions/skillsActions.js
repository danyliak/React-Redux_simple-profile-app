import { createAction } from 'redux-actions'
import * as types from '../constants/actionTypes'

const addNewSkill = createAction(types.ADD_NEW_SKILL_SUCCESS);
const removeSkill = createAction(types.REMOVE_SKILL_SUCCESS);

export default {
    addNewSkill,
    removeSkill
}