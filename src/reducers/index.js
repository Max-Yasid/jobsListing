import { combineReducers } from "redux";
import filters from "./filters";
import jobList from "./jobList";

const rootReducer = combineReducers({
    filters,
    jobList,
});
  
export default rootReducer;
  