import { ACTION_TYPES } from "../actions/actionTypes";
import { ActionInterface } from "../interfaces/ActionInterface";

export const selectNumberOfTransferReducer = (state : any[] = [], action : ActionInterface) => {
    if (action.type === ACTION_TYPES.NUMBER_OF_TRANSFER){
        state = state.includes(action.payload) ? state.filter(
            (x) => {return x !== action.payload}
        ) : state.concat([action.payload])
    }
    return state;
}