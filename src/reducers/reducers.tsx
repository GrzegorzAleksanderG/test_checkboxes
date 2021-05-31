import { combineReducers } from "redux";
import { getAllDataFromAPIReducer } from "./getAllDataFromAPIReducer";
import { getDataReducer } from "./getDataReducer";
import { selectNumberOfTransferReducer } from './selectNumberOfTransferReducer'

export default combineReducers({
    selectedNumbers : selectNumberOfTransferReducer,
    allDataFromAPI : getAllDataFromAPIReducer,
    getData : getDataReducer
})