import axios from 'axios'
import { useState } from 'react'
import { BASE_URL } from '../services/api'
const TicketCard = ({ ticket, getTicket }) => {
  const [delT, setDelT] = useState({})
  const deleteTicket = async () => {
    const res = await axios.delete(`${BASE_URL}/api/ticket/${ticket.id}`)
    setDelT(res.data)
    getTicket()
  }
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
      <button className="buttonD" onClick={() => deleteTicket(ticket.id)}>
        Cancel Trip
      </button>
    </div>
  )
}
export default TicketCard
