import { ACTION_TYPES } from '../actions/actionTypes';

export const getDataFromAPI = () => { //async
    return (dispatch : any) => {
    //let fetchedData;
    dispatch({type: ACTION_TYPES.GET_DATA_REQUESTED});
    fetch("http://www.mocky.io/v3/489c98a8-ac3d-418b-a59a-8408c4a991be", { //await
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }  
        }).then((res) => {return res}).then((data) => {return data.json()}).then((jsonElement) => {
            //fetchedData = jsonElement;
            dispatch({type: ACTION_TYPES.GET_DATA_DONE, payload: jsonElement});
        }).catch((e:Error) => {
            //console.log("getAllDataFromAPIReducer ERROR", e.message)
            dispatch({type: ACTION_TYPES.GET_DATA_FAILED, payload: e});
        });
    //return fetchedData;
    }
}