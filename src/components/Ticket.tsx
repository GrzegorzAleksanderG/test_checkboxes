import { TicketInterface } from '../interfaces/TicketInterface';
import './style.css';
import { getAllDataFromAPIAction } from '../actions/getAllDataFromAPIAction';
import { selectNumberOfTransferAction } from '../actions/selectNumberOfTransfersAction';
import { connect } from 'react-redux';

const Ticket = ({countTransfers, textTransfers} : TicketInterface) => {
    return(
        <div className="div--blurred-borders div--transfer">
            {textTransfers}
            <br/>
            &#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135; &#x2708;
        </div>
    )
}

const mapStateToProps = (state : any) => {
    return {
        selectedNumbers: state.selectNumberOfTransferReducer,
        getData : state.getDataReducer
    };
}

const mapDispatchToProps = {getAllDataFromAPIAction, selectNumberOfTransferAction};

export default connect(mapStateToProps, mapDispatchToProps)(Ticket);