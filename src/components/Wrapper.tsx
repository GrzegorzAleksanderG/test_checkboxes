import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import TransferList from "./TransfersList";
import TicketsList from "./TicketsList";
import { selectNumberOfTransferAction } from '../actions/selectNumberOfTransfersAction';
import { getDataFromAPI } from "../data/getDataFromAPI";

const Wrapper = () => {
    const dispatch = useDispatch();

    useEffect(() => {      
      dispatch(getDataFromAPI());      
    }, [dispatch])

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
        getData : state.getDataReducer
    };
  }

  const mapDispatchToProps = {selectNumberOfTransferAction};

  export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);