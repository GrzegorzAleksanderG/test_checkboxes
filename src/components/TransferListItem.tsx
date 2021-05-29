import {TransferListItemInterface} from "./../interfaces/TransferListItemInterface";
import "./style.css";

const TransferListItem = ({amountOfTransfers, textTransfer, textOnly} : TransferListItemInterface) => {
    return(
        <tr>
            <td>
                <input type="checkbox"/>
                <input type="hidden" value={amountOfTransfers ? amountOfTransfers : ""}/>
            </td>
            <td>{textTransfer}</td>
            <td className="only">{textOnly}</td>
        </tr>
    );
}
export default TransferListItem;