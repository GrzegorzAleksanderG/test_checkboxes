import {TransferListItemInterface} from "./../interfaces/TransferListItemInterface";
import TransferListItem from './TransferListItem';
import './style.css';
import { connect, useSelector } from "react-redux";
import { getAllDataFromAPIAction } from "../actions/getAllDataFromAPIAction";
import { selectNumberOfTransferAction } from '../actions/selectNumberOfTransfersAction';

const TransferList = () => {

    const transfersParams = useSelector((state : any) => { 
        if(!state.getData.isLoading && !state.getData.isError && state.getData.allData) {
            return state.getData.allData.transfersParams
        } 
    });
    //const all = useSelector((state : any) => state);

    return (
        <div className="div--list div--blurred-borders">
            {console.log("thisState",transfersParams)}
            <h4>NUMBER OF TRANSFERS</h4>
            <table>
                <tbody>
                    {
                        transfersParams && transfersParams.map((x: TransferListItemInterface, index: number) => {
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
    return {
        selectedNumbers: state.selectNumberOfTransferReducer,
        getData : state.getDataReducer
    };
}

const mapDispatchToProps = {getAllDataFromAPIAction, selectNumberOfTransferAction};

export default connect(mapStateToProps, mapDispatchToProps)(TransferList);