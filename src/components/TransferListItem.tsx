import { selectNumberOfTransferAction } from "./../actions/selectNumberOfTransfersAction";
import { getAllDataFromAPIAction } from "./../actions/getAllDataFromAPIAction"
import { connect, useDispatch, useSelector } from "react-redux";
import {TransferListItemInterface} from "./../interfaces/TransferListItemInterface";
import "./style.css";
import { selectAllNumbersAction } from "../actions/selectAllNumbersAction";

const TransferListItem = ({amountOfTransfers, textTransfer, textOnly} : TransferListItemInterface) => {

    const dispatch = useDispatch();

    const allExistedFilters = useSelector((state : any) => {
        if(!state.getData.isLoading && !state.getData.isError && state.getData.allData) {
            return state.getData.allData.transfersParams.filter((x : any) => {
                return x.amountOfTransfers>=0}).map((x : any) => {return x.amountOfTransfers})
        } 
    })

    const handleOnChange = () => {
        if(amountOfTransfers >= 0){
            dispatch(selectNumberOfTransferAction(amountOfTransfers))
        }else{
            dispatch(selectAllNumbersAction(allExistedFilters))
        }
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
        getData : state.getDataReducer
    };
}

const mapDispatchToProps = {selectNumberOfTransferAction, getAllDataFromAPIAction};

export default connect(mapStateToProps, mapDispatchToProps)(TransferListItem);