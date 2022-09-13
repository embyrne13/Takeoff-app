import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import UserControls from '../Components/UserControls'
import { useState } from 'react'
import { BASE_URL } from '../services/api'
import axios from 'axios'
import TicketCard from '../Components/TicketCard'
const Booking = ({ user, authenticated, LogOut }) => {
  const [isFormActive, setIsFormActive] = useState(false)
  const [ticketResults, setTicketResults] = useState([])
  const navigate = useNavigate()

  const toggleActive = (e) => {
    setIsFormActive(!isFormActive)
    if (e.target.innerHTML === 'Edit Account') {
      e.target.innerHTML = 'Cancel'
    } else {
      e.target.innerHTML = 'Edit Account'
    }
  }
  const getTicket = async () => {
    await axios
      .get(`${BASE_URL}/api/ticket/`)
      .then(function (response) {
        console.log(response)
        setTicketResults(response.data)
        console.log(ticketResults)
      })
      .catch(function (error) {
        console.error(error)
      })
  }
  useEffect(() => {
    getTicket()
  }, [])

  return user && authenticated ? (
    <div id="ticketPage">
      <section>
        <div id="userInfo">
          {isFormActive ? <UserControls user={user} LogOut={LogOut} /> : null}
          <button className="editAccountButton" onClick={toggleActive}>
            Edit Account
          </button>
        </div>
        <div className="tkt">
          {ticketResults?.map((ticket) => (
            <TicketCard ticket={ticket} getTicket={getTicket} />
          ))}
        </div>
      </section>
      <div id="userTicket"></div>
    </div>
  ) : (
    <div className="protectedContent">
      <h4 className="needLogin">Login to add or view tickets</h4>
      <button className="buttonz" onClick={() => navigate('/userLogin')}>
        Login
      </button>
    </div>
  )
}

export default Booking
