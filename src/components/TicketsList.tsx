import { useEffect, useState } from 'react';
import { TicketInterface } from './../interfaces/TicketInterface';
import Ticket from './Ticket';
import './style.css';
import { connect, useSelector } from 'react-redux';
import { selectNumberOfTransferAction } from '../actions/selectNumberOfTransfersAction';
import { SelectedNumbersInterface } from '../interfaces/SelectedNumbersInterface';
import { getAllDataFromAPIAction } from '../actions/getAllDataFromAPIAction';

const TicketsList = () => {

    const [listOfTickets, setListOfTickets] = useState([]);

    const selectedNumbers = useSelector((state : SelectedNumbersInterface) => state.selectedNumbers);

    useEffect(() => {
        fetch("http://www.mocky.io/v3/48cba781-18bb-406b-a7a7-fad090ab9e0c", {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }  
        }).then((res) => {
                return res;}).then((data) => {
                    return data.json()}).then((jsonElement) => {
                        setListOfTickets(jsonElement.tickets)})
    }, [])

    return (
        <div className="div--list"> 
            {
             listOfTickets.filter((x: TicketInterface) => {return selectedNumbers.includes(x.countTransfers)}).map((x: TicketInterface, index: number) => {
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
        allDataFromAPI : state.getAllDataFromAPIReducer
    };
}

const mapDispatchToProps = {selectNumberOfTransferAction, getAllDataFromAPIAction};

export default connect(mapStateToProps, mapDispatchToProps)(TicketsList);