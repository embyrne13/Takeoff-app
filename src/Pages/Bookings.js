import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import UserControls from '../Components/UserControls'
import { useState } from 'react'
import Client, { BASE_URL } from '../services/api'

const Booking = ({
  user,
  authenticated,
  userTickets,
  handleTicketSelect,
  handleUserTickets,
  setSelectedTicket,
  LogOut
}) => {
  const [isFormActive, setIsFormActive] = useState(false)
  // const [createNew, toggleCreateNew] = useState(false)
  // const [newTicket, setNewTicket] = useState(null)
  const navigate = useNavigate()

  const toggleActive = (e) => {
    setIsFormActive(!isFormActive)
    if (e.target.innerHTML === 'Edit Account') {
      e.target.innerHTML = 'Cancel'
    } else {
      e.target.innerHTML = 'Edit Account'
    }
  }
  // const handleCreateTicket = () => {
  //   toggleCreateNew(!createNew)
  // }
  // const submitNewTicket = async () => {
  //   await Client.post(`${BASE_URL}/api/ticket/${user.id}`, {
  //     ticket: newTicket
  //   })
  //   toggleCreateNew(false)
  //   navigate('/tickets')
  // }
  // useEffect(() => {
  //   if (authenticated) {
  //     handleUserTickets(user)
  //     setSelectedTicket(null)
  //   }
  // }, [createNew])
  return user && authenticated ? (
    <div id="ticketPage">
      <section>
        <div id="userInfo">
          {isFormActive ? <UserControls user={user} LogOut={LogOut} /> : null}
          <button className="editAccountButton" onClick={toggleActive}>
            Edit Account
          </button>
        </div>
        {/* <div id="addTicketButtonAndCreateTicket">
          <button
            className="buttonz"
            id="createPL"
            onClick={handleCreateTicket}
          >
            {createNew ? 'Cancel' : 'Create Ticket'}
          </button>
          {createNew ? (
            <input
              className="createTickettName"
              placeholder="Ticket"
              onChange={(e) => setNewTicket(e.target.value)}
            />
          ) : null}
          {createNew ? (
            <button className="buttonz" onClick={submitNewTicket}>
              Add Ticket
            </button>
          ) : null}
        </div> */}
      </section>
      <div id="userTicket">
        {/* <div className="ticketCard">
          {userTickets?.map((userTicket, index) => (
            <TicketCard
              key={userTicket.id}
              userTicket={userTicket}
              handleTicketSelect={() => handleTicketSelect(userTicket)}
            />
          ))}
        </div> */}
      </div>
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
