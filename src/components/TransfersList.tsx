import {TransferListItemInterface} from "./../interfaces/TransferListItemInterface";
import TransferListItem from './TransferListItem';
import './style.css';
import { connect, useSelector } from "react-redux";
import { getAllDataFromAPIAction } from "../actions/getAllDataFromAPIAction";
import { selectNumberOfTransferAction } from '../actions/selectNumberOfTransfersAction';

const TransferList = () => {

    const transfersParams = useSelector((state : any) => state.getData.allData.transfersParams);

    return (
        <div className="div--list div--blurred-borders">
            <h4>NUMBER OF TRANSFERS</h4>
            {console.log("thisState", transfersParams)}
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
        allDataFromAPI: state.getAllDataFromAPIReducer,
    };
}

const mapDispatchToProps = {getAllDataFromAPIAction, selectNumberOfTransferAction};

export default connect(mapStateToProps, mapDispatchToProps)(TransferList);