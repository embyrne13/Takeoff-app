const TicketCard = ({ ticket }) => {
  return (
    <div className="ticket">
      <h2 className="ticketInfo">Reference Number: {ticket.refNumber}</h2>
      <h2 className="ticketInfo">Email: {ticket.email}</h2>
      <h2 className="ticketInfo">Phone: {ticket.phone}</h2>
      <h2 className="ticketInfo">Cost: ${ticket.flightFare}</h2>
    </div>
  )
}
export default TicketCard
