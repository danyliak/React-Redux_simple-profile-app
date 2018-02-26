import { createAction } from 'redux-actions'
import * as types from '../constants/actionTypes'

const addNewPortfolio = createAction(types.ADD_NEW_PORTFOLIO_SUCCESS);
const removePortfolio = createAction(types.REMOVE_PORTFOLIO_SUCCESS);

export default {
    addNewPortfolio,
    removePortfolio
}