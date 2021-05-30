import { useEffect, useState } from 'react';
import { TicketInterface } from './../interfaces/TicketInterface';
import Ticket from './Ticket';
import './style.css';
import { connect } from 'react-redux';

const TicketsList = () => {

    const [listOfTickets, setListOfTickets] = useState([]);

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
                listOfTickets.map((x: TicketInterface, index: number) => {
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
export default TicketsList;