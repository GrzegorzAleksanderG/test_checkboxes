//import { selectNumberOfTransferAction } from "../actions/selectNumberOfTransfersAction";
import { useState } from "react";
import { connect } from "react-redux";
import {TransferListItemInterface} from "./../interfaces/TransferListItemInterface";
import "./style.css";

const TransferListItem = ({amountOfTransfers, textTransfer, textOnly} : TransferListItemInterface) => {

    const [checked, setChecked] = useState(false);

    return(
        <tr>
            <td>
                <input type="checkbox" onChange={() => handleOnChange()}/>
                <input type="hidden" value={amountOfTransfers ? amountOfTransfers : -1}/>
            </td>
            <td>{textTransfer}</td>
            <td className="only">{textOnly}</td>
        </tr>
    );

    const handleOnChange = () => {
        //selectNumberOfTransferAction(amountOfTransfers)
    }
}

const mapStateToProps = (state : any) => {
    return {selectNumberOfTransferReducer: state.selectNumberOfTransferReducer};
}

export default connect(mapStateToProps)(TransferListItem);