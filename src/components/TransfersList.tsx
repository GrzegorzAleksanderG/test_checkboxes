import {TransferListItemInterface} from "./../interfaces/TransferListItemInterface";
import TransferListItem from './TransferListItem';
import './style.css';
import { connect, useSelector } from "react-redux";
import { selectNumberOfTransferAction } from '../actions/selectNumberOfTransfersAction';
import { SelectedNumbersInterface } from "../interfaces/SelectedNumbersInterface";

const TransferList = () => {

    const transfersParams = useSelector((state : any) => { 
        if(!state.getData.isLoading && !state.getData.isError && state.getData.allData) {
            return state.getData.allData.transfersParams
        } 
    });

    const selectedNumbers = useSelector((state : SelectedNumbersInterface) => state.selectedNumbers);

    return (
        <div className="div--list div--blurred-borders">
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

const mapDispatchToProps = {selectNumberOfTransferAction};

export default connect(mapStateToProps, mapDispatchToProps)(TransferList);