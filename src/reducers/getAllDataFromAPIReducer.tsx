import { ACTION_TYPES } from "../actions/actionTypes";
import { ActionInterface } from "../interfaces/ActionInterface";

export const getAllDataFromAPIReducer = (state : any[] = [], action : ActionInterface) => {
    if (action.type === ACTION_TYPES.GET_ALL_API_DATA){
        state = action.payload
    }
    return state;
}