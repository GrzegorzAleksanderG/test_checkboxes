import {TransferListItemInterface} from "./../interfaces/TransferListItemInterface";
import TransferListItem from './TransferListItem';
import './style.css';
import { connect, useSelector } from "react-redux";
import { getAllDataFromAPIAction } from "../actions/getAllDataFromAPIAction";
import { selectNumberOfTransferAction } from '../actions/selectNumberOfTransfersAction';
import { SelectedNumbersInterface } from "../interfaces/SelectedNumbersInterface";

const TransferList = () => {

    const transfersParams = useSelector((state : any) => { 
        if(!state.getData.isLoading && !state.getData.isError && state.getData.allData) {
            return state.getData.allData.transfersParams
        } 
    });

    const selectedNumbers = useSelector((state : SelectedNumbersInterface) => state.selectedNumbers);
    
    // const allExistedFilters = useSelector((state : any) => {
    //     if(!state.getData.isLoading && !state.getData.isError && state.getData.allData) {
    //         return state.getData.allData.transfersParams.filter((x : any) => {
    //             return x.amountOfTransfers>=0}).map((x : any) => {return x.amountOfTransfers})
    //     } 
    // })

    return (
        <div className="div--list div--blurred-borders">
            {console.log("thisState",selectedNumbers)}
            <h4>NUMBER OF TRANSFERS</h4>
            <table>
                <tbody>
                    {
                        transfersParams && transfersParams.map((x: TransferListItemInterface, index: number) => {
                            {console.log("map transfers", selectedNumbers.includes(x.amountOfTransfers))}
                            return <TransferListItem
                                        key={index}
                                        amountOfTransfers={x.amountOfTransfers}
                                        textTransfer={x.textTransfer}
                                        textOnly={x.textOnly}
                                        checked={selectedNumbers.includes(x.amountOfTransfers) ? true : false}
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
    return {
        selectedNumbers: state.selectNumberOfTransferReducer,
        getData : state.getDataReducer
    };
}

const mapDispatchToProps = {getAllDataFromAPIAction, selectNumberOfTransferAction};

export default connect(mapStateToProps, mapDispatchToProps)(TransferList);