import { TicketInterface } from "./TicketInterface";
import { TransferListItemInterface } from "./TransferListItemInterface";

export interface DataFromAPIInterface {
    transfersParams : TransferListItemInterface[],
    tickets : TicketInterface[]
}
