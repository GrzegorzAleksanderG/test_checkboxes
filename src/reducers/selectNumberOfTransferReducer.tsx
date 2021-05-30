import { ACTION_TYPES } from "../actions/actionTypes";
import { ActionInterface } from "../interfaces/ActionInterface";

export const selectNumberOfTransferReducer = (selectNumber : number = 0, action : ActionInterface) => {
    console.log("selectNumberOfTransferReducer", action);
    if (action.type === ACTION_TYPES.NUMBER_OF_TRANSFER){
        return action.payload;
    }

    return selectNumber;
}