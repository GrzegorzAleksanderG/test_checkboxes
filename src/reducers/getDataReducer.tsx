import { ACTION_TYPES } from '../actions/actionTypes';
import { ActionInterface } from '../interfaces/ActionInterface';

export const getDataReducer = (state : any = 0, action : ActionInterface) => {
  switch (action.type) {
    case ACTION_TYPES.GET_DATA_REQUESTED:
      return { ...state, isLoading: true, isError: false };
    case ACTION_TYPES.GET_DATA_DONE:
      return { ...state, isLoading: false, isError: false, allData: action.payload };
    case ACTION_TYPES.GET_DATA_FAILED:
      return { ...state, isLoading: false, isError: true }
    default:
      return state;
  }
};