import { combineReducers } from "redux";
import { getDataReducer } from "./getDataReducer";
import { selectNumberOfTransferReducer } from './selectNumberOfTransferReducer'

export default combineReducers({
    selectedNumbers : selectNumberOfTransferReducer,
    getData : getDataReducer
})