import { ACTION_TYPES } from "./actionTypes"

export const getDataRequestedAction = () => {
    return {
        type: ACTION_TYPES.GET_DATA_REQUESTED
    }
}

export const getDataDoneAction = (payload : any) => {
    return {
        type: ACTION_TYPES.GET_DATA_DONE,
        payload
    }
}

export const getDataFailedAction = (payload : any) => {
    return {
        type: ACTION_TYPES.GET_DATA_FAILED,
        payload
    }
}