import { TicketInterface } from './../interfaces/TicketInterface';
import Ticket from './Ticket';
import './style.css';
import { connect, useSelector } from 'react-redux';
import { selectNumberOfTransferAction } from '../actions/selectNumberOfTransfersAction';
import { SelectedNumbersInterface } from '../interfaces/SelectedNumbersInterface';
import { getAllDataFromAPIAction } from '../actions/getAllDataFromAPIAction';

const TicketsList = () => {

    const selectedNumbers = useSelector((state : SelectedNumbersInterface) => state.selectedNumbers);
    const tickets = useSelector((state : any) => { 
        if(!state.getData.isLoading && !state.getData.isError && state.getData.allData) {
            return state.getData.allData.tickets
        } 
    });

    return (
        <div className="div--list"> 
            {
             tickets && tickets.filter((x: TicketInterface) => {return selectedNumbers.includes(x.countTransfers)}).map((x: TicketInterface, index: number) => {
                            return <Ticket
                                        key={index}
                                        countTransfers={x.countTransfers}
                                        textTransfers={x.textTransfers}
                                    />
                            }
                        )
            }
        </div>
    )
}

const mapStateToProps = (state : any) => {
    return {
        selectedNumbers: state.selectNumberOfTransferReducer,
        allDataFromAPI : state.getAllDataFromAPIReducer,
        getData : state.getDataReducer
    };
}

const mapDispatchToProps = {selectNumberOfTransferAction, getAllDataFromAPIAction};

export default connect(mapStateToProps, mapDispatchToProps)(TicketsList);