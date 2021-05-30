import { ACTION_TYPES } from "./actionTypes"

export const selectNumberOfTransferAction = (count : number) => {
    return {
        type: ACTION_TYPES.NUMBER_OF_TRANSFER,
        payload: count
    }
}