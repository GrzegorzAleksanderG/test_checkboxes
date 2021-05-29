import { TicketInterface } from '../interfaces/TicketInterface';
import './style.css';

const Ticket = ({countTransfers, textTransfers} : TicketInterface) => {
    return(
        <div className="blurred-borders">
            {textTransfers}
        </div>
    )
}
export default Ticket;