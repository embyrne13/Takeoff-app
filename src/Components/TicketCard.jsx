const TicketCard = ({ ticket }) => {
  return (
    <div className="ticket">
      <h2 className="tickeInfo">Email: {ticket.email}</h2>
      <h2 className="tickeInfo">Phone: {ticket.phone}</h2>
      <h2 className="tickeInfo">Cost: ${ticket.flightFare}</h2>
    </div>
  )
}
export default TicketCard
