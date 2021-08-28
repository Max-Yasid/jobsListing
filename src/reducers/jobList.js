import { FILL_JOB_LIST } from "../constants/actionTypes";

const job_list = [];

export default function jobList(state = job_list, action){
    switch(action.type){
        case FILL_JOB_LIST:
            return action.list;
        default:
            return state;
    }
}