import { createAction } from 'redux-actions'
import * as types from '../constants/actionTypes'

const changeMainInformation = createAction(types.CHANGE_MAIN_INFORMATION);

export default {
    changeMainInformation
}