import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { getAllDataFromAPIAction } from "../actions/getAllDataFromAPIAction";
import TransferList from "./TransfersList";
import TicketsList from "./TicketsList";
import { selectNumberOfTransferAction } from '../actions/selectNumberOfTransfersAction';
import { getDataFromAPI } from "../data/getDataFromAPI";

const Wrapper = () => {
    const dispatch = useDispatch();

    useEffect(() => {      
      dispatch(getDataFromAPI());      
    }, [])

    return (
        <>
            <TransferList/>
            <TicketsList/>
        </>
    )
}

const mapStateToProps = (state : any) => {
    return {
        selectedNumbers: state.selectNumberOfTransferReducer,
        allDataFromAPI: state.getAllDataFromAPIReducer,
        getData : state.getDataReducer
    };
  }

  const mapDispatchToProps = {getAllDataFromAPIAction, selectNumberOfTransferAction};

  export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);