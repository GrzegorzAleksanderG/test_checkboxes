import { selectNumberOfTransferAction } from "./../actions/selectNumberOfTransfersAction";
import { useState } from "react";
import { connect } from "react-redux";
import {TransferListItemInterface} from "./../interfaces/TransferListItemInterface";
import "./style.css";

const TransferListItem = ({amountOfTransfers, textTransfer, textOnly} : TransferListItemInterface) => {

    const [checked, setChecked] = useState(false);

    const handleOnChange = () => {
        //store.dispatch(selectNumberOfTransferAction(amountOfTransfers));
        console.log("handleOnChange")
    }

    return(
        <tr>
            <td>
                <input type="checkbox" onChange={() => handleOnChange()}/>
                <input type="hidden" value={amountOfTransfers ? amountOfTransfers : -1}/>
            </td>
            <td>{textTransfer}</td>
            <td className="td--only">{textOnly}</td>
        </tr>
    );
}

const mapStateToProps = (state : any) => {
    console.log("state", state);
    return {selectNumberOfTransferReducer: state.selectNumberOfTransferReducer};
}

const mapDispatchToProps = {selectNumberOfTransferAction};

export default connect(mapStateToProps, mapDispatchToProps)(TransferListItem);