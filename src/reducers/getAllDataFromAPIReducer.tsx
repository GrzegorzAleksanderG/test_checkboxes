import { ACTION_TYPES } from "../actions/actionTypes";
import { getDataFromAPI } from "../data/getDataFromAPI";
import { ActionInterface } from "../interfaces/ActionInterface";
import { DataFromAPIInterface } from '../interfaces/DataFromAPIInterface';

export const getAllDataFromAPIReducer = async (state : any[] = [], action : ActionInterface) => {
    if (action.type === ACTION_TYPES.GET_ALL_API_DATA){
        // const data = await getDataFromAPI().then((res : any) => {
        //     return [res.tickets, res.transfersParams]});
        // state = [data, state];
    }
    return state;
}