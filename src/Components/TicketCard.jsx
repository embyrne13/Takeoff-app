import axios from 'axios'
import { useState } from 'react'
import { BASE_URL } from '../services/api'
import swal from 'sweetalert'

const TicketCard = ({ ticket, getTicket }) => {
  const [delT, setDelT] = useState({})
  const deleteTicket = async () => {
    const res = await axios.delete(`${BASE_URL}/api/ticket/${ticket.id}`, {
      data: {
        id: ticket.id
      }
    })
    swal('Trip has been cancelled!', {
      icon: 'success'
    })
    setDelT(res.data)
    getTicket()
  }
  const handleDeleteClick = () => {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this ticket.',
      icon: 'warning',
      dangerMode: true,
      buttons: {
        decline: {
          text: 'Cancel',
          value: false
        },
        accept: {
          text: 'Delete',
          value: true
        }
      }
    }).then((value) => {
      if (value) {
        deleteTicket()
      } else {
        swal('Trip is not cancelled. Click OK to continue.')
      }
    })
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
      <button className="buttonD" onClick={handleDeleteClick}>
        Cancel Trip
      </button>
    </div>
  )
}
export default TicketCard
