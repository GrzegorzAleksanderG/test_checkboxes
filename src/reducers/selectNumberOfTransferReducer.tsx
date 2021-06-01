import { ACTION_TYPES } from "../actions/actionTypes";
import { ActionInterface } from "../interfaces/ActionInterface";

export const selectNumberOfTransferReducer = (state : any[] = [], action : ActionInterface) => {
    if (action.type === ACTION_TYPES.NUMBER_OF_TRANSFER){
        state = state.includes(action.payload) ? state.filter(
            (x) => {return x !== action.payload}
        ) : state.concat([action.payload])
    }
    if (action.type === ACTION_TYPES.SELECT_ALL_NUMBERS){
        console.log("reducer", action, state.every((x) => {action.payload.includes(x)}));
        state =  state.length === action.payload.length ? [] : action.payload;
    }
    console.log("reducer stan", state);
    return state;
}

