import { getDataDoneAction, getDataRequestedAction, getDataFailedAction} from '../actions/getDataActions';

export const getDataFromAPI = () => {
    return (dispatch : any) => {
    dispatch(getDataRequestedAction);
    fetch("http://www.mocky.io/v3/489c98a8-ac3d-418b-a59a-8408c4a991be", {
            headers : { 
              'Content-Type': 'application/json', 
              'Accept': 'application/json'
            }  
        }).then((res) => {return res}).then((data) => {return data.json()}).then((jsonElement) => {
            dispatch(getDataDoneAction(jsonElement));
        }).catch((e:Error) => {
            dispatch(getDataFailedAction(e));
        });
    }
}