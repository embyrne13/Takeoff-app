import { useNavigate } from 'react-router-dom'
import Client, { BASE_URL } from '../services/api'
import swal from 'sweetalert'

const FlightDetails = ({
  isToggled,
  setIsToggled,
  selectedFlight,
  setSelectedFlight,
  handleGoToSearch,
  user,
  authenticated,
  userTickets,
  selectedTicket,
  setSelectedTicket,
  flight,
  handleSearchSubmit,
  selectValue,
  handleSelectChange,
  destValue,
  handleDestValue
}) => {
  const navigate = useNavigate()

  const handleAddToTicket = async (ticket_id) => {
    let flight_city = selectedFlight.data.city
    let flight_airport = selectedFlight.data.airport
    let flight_country = selectedFlight.data.country
    let flight_date = selectedFlight.data.date
    let flight_origin = selectedFlight.data.origin
    let flight_destination = selectedFlight.data.destination
    let flight_departDay = selectedFlight.data.departDay
    let flight_departTime = selectedFlight.data.departTime
    let flight_arrivalTime = selectedFlight.data.arrivalTime
    let flight_airline = selectedFlight.data.airline
    let flight_duration = selectedFlight.data.duration
    let flightExists = await Client.get(`${BASE_URL}/api/flight`, {
      params: { airline: flight_airline }
    })
    let flight_id
    if (!flightExists.data.message) {
      flight_id = flightExists.data.id
    } else {
      let newFlight = {
        airline: flight_airline,
        origin: flight_origin,
        destination: flight_destination,
        departTime: flight_departTime,
        arrivalTime: flight_arrivalTime,
        city: flight_city,
        airport: flight_airport,
        country: flight_country,
        date: flight_date,
        departDay: flight_departDay,
        duration: flight_duration
      }
      await Client.post(`${BASE_URL}/api/flight`, newFlight)
      let newFlightIn = await Client.get(`${BASE_URL}/api/flight`, {
        params: { airline: flight_airline }
      })
      flight_id = newFlightIn.data.id
    }
    let response = await Client.post(
      `${BASE_URL}/api/ticket/addflight/${ticket_id}/${flight_id}`
    )
    if (!response.data.message) {
      swal(
        'Flight has been successfully added to tickets!',
        'Click OK to return!',
        'success'
      )
    } else {
      swal(
        'Flight Already Booked!',
        'You already have a ticket for this flight!',
        'warning'
      )
    }
  }

  let selectOptions
  if (user && userTickets && userTickets.length > 0) {
    selectOptions = (
      <div className="optDiv">
        <h4 className="msg">Book Flight</h4>
        {userTickets.map((ticket) => (
          <button
            className="buttonz"
            key={ticket.id}
            onClick={() => handleAddToTicket(ticket.id)}
          >
            {ticket.flightDepartDate}
          </button>
        ))}
      </div>
    )
  } else if (!user) {
    selectOptions = (
      <div className="optDiv">
        <p className="msg">
          <a className="here" href="/userLogin">
            Login
          </a>{' '}
          to book this flight
        </p>
      </div>
    )
  }
  return (
    <div className="flightDetailsPage">
      <div className="info">
        <h3>Airline: {flight.airline}</h3>
        <h3>Origin: {flight.origin}</h3>
        <h3>Destination: {flight.destination}</h3>
        <h3>Duration: {flight.duration}</h3>
        {!selectedTicket ? selectOptions : null}
        <button
          className="buttonz"
          onClick={() => {
            setIsToggled(!isToggled)
          }}
        >
          Back to Search
        </button>
      </div>
    </div>
  )
}

export default FlightDetails
