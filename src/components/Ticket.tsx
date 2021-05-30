import { TicketInterface } from '../interfaces/TicketInterface';
import './style.css';

const Ticket = ({countTransfers, textTransfers} : TicketInterface) => {
    return(
        <div className="div--blurred-borders div--transfer">
            {textTransfers}
            <br/>
            &#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135;&#9135; &#x2708;
        </div>
    )
}
export default Ticket;