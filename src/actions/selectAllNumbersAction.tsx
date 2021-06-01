import { ACTION_TYPES } from "./actionTypes"

export const selectAllNumbersAction = (allExistedFilters : number) => {
    console.log("allExistedFilters", allExistedFilters);
    return {
        type: ACTION_TYPES.SELECT_ALL_NUMBERS,
        payload: allExistedFilters
    }
}