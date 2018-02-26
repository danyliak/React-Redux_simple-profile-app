import initialState from './initialState'
import {
    ADD_NEW_PORTFOLIO_SUCCESS,
    REMOVE_PORTFOLIO_SUCCESS
} from '../constants/actionTypes'

export default (state = initialState.portfolio, action) => {
    switch (action.type) {
        case ADD_NEW_PORTFOLIO_SUCCESS:
            return [
                ...state,
                action.payload
            ];
        case REMOVE_PORTFOLIO_SUCCESS:
            return state.filter(portfolio => portfolio.id !== action.payload);
        default:
            return state
    }
}