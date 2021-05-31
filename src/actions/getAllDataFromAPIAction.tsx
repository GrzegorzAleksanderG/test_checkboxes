import { ACTION_TYPES } from "./actionTypes"

export const getAllDataFromAPIAction = (data : any[]) => {
    return {
        type: ACTION_TYPES.GET_ALL_API_DATA,
        payload: data
    }
}