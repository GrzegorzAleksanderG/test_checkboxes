import { combineReducers } from "redux";
import { getAllDataFromAPIReducer } from "./getAllDataFromAPIReducer";
import { selectNumberOfTransferReducer } from './selectNumberOfTransferReducer'

export default combineReducers({
    selectedNumbers : selectNumberOfTransferReducer,
    allDataFromAPI : getAllDataFromAPIReducer
})