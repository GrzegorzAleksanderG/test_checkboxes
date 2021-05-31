import { selectNumberOfTransferAction } from "./../actions/selectNumberOfTransfersAction";
import { getAllDataFromAPIAction } from "./../actions/getAllDataFromAPIAction"
import { connect, useDispatch } from "react-redux";
import {TransferListItemInterface} from "./../interfaces/TransferListItemInterface";
import "./style.css";

const TransferListItem = ({amountOfTransfers, textTransfer, textOnly} : TransferListItemInterface) => {

    const dispatch = useDispatch();

    const handleOnChange = () => {
        //amountOfTransfers >= 0 
        dispatch(selectNumberOfTransferAction(amountOfTransfers))
        //: dispatch(selectNumberOfTransferAction(amountOfTransfers))
    }

    return(
        <tr>
            <td>
                <input type="checkbox" onChange={() => handleOnChange()}/>
            </td>
            <td>{textTransfer}</td>
            <td className="td--only">{textOnly}</td>
        </tr>
    );
}

const mapStateToProps = (state : any) => {
    return {
        selectedNumbers: state.selectNumberOfTransferReducer,
        allDataFromAPI : state.getAllDataFromAPIReducer
    };
}

const mapDispatchToProps = {selectNumberOfTransferAction, getAllDataFromAPIAction};

export default connect(mapStateToProps, mapDispatchToProps)(TransferListItem);