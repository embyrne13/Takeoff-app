import { useNavigate } from 'react-router-dom'
import Client, { BASE_URL } from '../services/api'
import swal from 'sweetalert'
import { useState } from 'react'

const FlightDetails = ({
  isToggled,
  setIsToggled,
  user,
  authenticated,
  userTickets,
  selectedTicket,
  setSelectedTicket,
  flight
}) => {
  const navigate = useNavigate()
  const [searchResults, setSearchResults] = useState([])
  const [selectValue, setSelectValue] = useState('')
  const [destValue, setDestValue] = useState('')
  const handleAddToTicket = async (ticket_id) => {
    let flight_city = flight.data.city
    let flight_airport = flight.data.airport
    let flight_country = flight.data.country
    let flight_date = flight.data.date
    let flight_origin = flight.data.origin
    let flight_destination = flight.data.destination
    let flight_departDay = flight.data.departDay
    let flight_departTime = flight.data.departTime
    let flight_arrivalTime = flight.data.arrivalTime
    let flight_airline = flight.data.airline
    let flight_duration = flight.data.duration
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
            {ticket.origin}
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
        <h3>
          Airline: <p className="fliii">{flight.airline}</p>
        </h3>
        <h3>
          Origin: <p className="fliii">{flight.origin}</p>
        </h3>
        <h3>
          Depart Time: <p className="fliii">{flight.departTime}pm</p>{' '}
        </h3>
        <h3>
          Destination: <p className="fliii">{flight.destination}</p>
        </h3>
        <h3>
          Arrival Time: <p className="fliii">{flight.arrivalTime}am</p>
        </h3>
        {!selectedTicket ? selectOptions : null}
        <button
          className="buttonz"
          onClick={() => {
            setIsToggled(!isToggled)
            setSearchResults(searchResults)
            setDestValue(destValue)
            setSelectValue(selectValue)
          }}
        >
          Back to Search
        </button>
      </div>
    </div>
  )
}

export default FlightDetails
