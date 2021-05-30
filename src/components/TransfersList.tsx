import { useState, useEffect } from "react";         
import {TransferListItemInterface} from "./../interfaces/TransferListItemInterface";
import TransferListItem from './TransferListItem';
import './style.css';
import { connect } from "react-redux";

const TransferList = () => {

    const [listOfItems, setListOfItems] = useState([]);

    useEffect(() => {
        fetch("http://www.mocky.io/v3/48cba781-18bb-406b-a7a7-fad090ab9e0c", {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }  
        }).then((res) => {
                return res;}).then((data) => {
                    return data.json()}).then((jsonElement) => {
                        setListOfItems(jsonElement.transfersParams)})
    }, [])

    return (
        <div className="list blurred-borders">
            <h4>NUMBER OF TRANSFERS</h4>
            <table>
                <tbody>
                    {
                        listOfItems.map((x: TransferListItemInterface, index: number) => {
                            return <TransferListItem
                                        key={index}
                                        amountOfTransfers={x.amountOfTransfers}
                                        textTransfer={x.textTransfer}
                                        textOnly={x.textOnly}
                                    />
                            }
                        )
                    }
                </tbody>
            </table>
        </div>
    );
} 

const mapStateToProps = (state : any) => {
    return {selectNumberOfTransferReducer: state.selectNumberOfTransferReducer};
}

export default connect(mapStateToProps)(TransferList);