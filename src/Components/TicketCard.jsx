const TicketCard = ({ ticket }) => {
  return (
    <div className="ticket">
      <h2 className="ticketInfo">
        Reference Number: <p className="tI"> {ticket.refNumber} </p>
      </h2>
      <h2 className="ticketInfo">
        Email: <p className="tI">{ticket.email}</p>
      </h2>
      <h2 className="ticketInfo">
        Phone: <p className="tI">{ticket.phone}</p>
      </h2>
      <h2 className="ticketInfo">
        Cost: <p className="tI">${ticket.flightFare}</p>
      </h2>
    </div>
  )
}
export default TicketCard
