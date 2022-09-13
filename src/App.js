import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Home from './Pages/Home'
import Header from './Components/Header'
import Bookings from './Pages/Bookings'
import { CheckLogin } from './services/Auth'
import Client, { BASE_URL } from './services/api'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import './App.css'
import FlightDetails from './Components/FlightDetails'
function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [selectedTicket, setSelectedTicket] = useState(null)
  const [userTickets, setUserTickets] = useState(null)
  const [results, setResults] = useState(null)
  let navigate = useNavigate()

  const checkToken = async () => {
    const user = await CheckLogin()
    setUser(user)
    toggleAuthenticated(true)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token && user) {
      checkToken()
    } else if (token && !user) {
      localStorage.clear()
    }
  }, [])
  const LogOut = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }
  const handleTicketSelect = (ticket) => {
    setSelectedTicket(ticket)
    navigate(`/tickets/${ticket.id}`)
  }
  const handleUserTickets = async (user) => {
    let user_id = user.id
    let tickets = await Client.get(`${BASE_URL}/api/ticket/${user_id}`)
    setUserTickets(tickets.data)
  }
  return (
    <div className="App">
      <Header LogOut={LogOut} user={user} authenticated={authenticated} />
      <main>
        <Routes>
          <Route path="/" element={<Home setResults={setResults} />} />
          <Route path="/signUp" element={<Signup />} />
          <Route
            path="/userLogin"
            element={
              <Login
                setUser={setUser}
                toggleAuthenticated={toggleAuthenticated}
              />
            }
          />
          <Route
            path="/results"
            element={<FlightDetails results={results} />}
          />
          <Route
            path="/tickets"
            element={
              <Bookings
                user={user}
                authenticated={authenticated}
                userTickets={userTickets}
                handleTicketSelect={handleTicketSelect}
                handleUserTickets={handleUserTickets}
                setSelectedTicket={setSelectedTicket}
                LogOut={LogOut}
              />
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
