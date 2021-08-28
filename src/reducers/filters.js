import { ADD_FILTER, CLEAR_FILTERS, REMOVE_FILTER } from "./../constants/actionTypes";

const initialState = [];

export default function filters(state = initialState, action){
    switch(action.type){
        case ADD_FILTER:
            if(state.some(filter => filter === action.filter)){
                return state;
            }
            return [...state, action.filter];
        case REMOVE_FILTER:
            return state.filter((filter) => filter !== action.filter);
        case CLEAR_FILTERS:
            return [];
        default:
            return state;
    }
}