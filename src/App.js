import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './Pages/Home'
import Header from './Components/Header'
import Bookings from './Pages/Bookings'
import { CheckLogin } from './services/Auth'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import './App.css'
import FlightDetails from './Components/FlightDetails'
function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [results, setResults] = useState(null)
  const [ticketResults, setTicketResults] = useState([])

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
                ticketResults={ticketResults}
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
