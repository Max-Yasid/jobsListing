import * as types from "./../constants/actionTypes";

export const addFilter = filter => ({ type: types.ADD_FILTER, filter });
export const removeFilters = () => ({ type: types.CLEAR_FILTERS });
export const removeFilter = (filter) => ({type: types.REMOVE_FILTER, filter });

export const fillJobsList = list => ({ type: types.FILL_JOB_LIST, list });