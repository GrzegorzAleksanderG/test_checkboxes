import { useState, useEffect } from "react";
import * as data from "./../API/fakeAPI_transfers.json";
//import TransferListItem from './TransferListItem';


const TransferList = () => {

    const [listOfItems, setListOfItems] = useState([]);

    useEffect(() => {
        fetch("./../API/fakeAPI_params.json", {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }}).then((res) => {
                return res;}).then((data) => {
                    return data.json()}).then((jsonElement) => {
                        console.log(jsonElement)})
    }, [])

    return (
        <div>
            <h1>NUMBER OF TRANSFERS</h1>
            {listOfItems.map((x) => {return x})}
        </div>
    );
} 
export default TransferList;