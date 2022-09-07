import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Header from './Components/Header'
import { CheckLogin } from './services/Auth'
import Client, { BASE_URL } from './services/api'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  // Auth functions
  const checkToken = async () => {
    const user = await CheckLogin()
    setUser(user)
    toggleAuthenticated(true)
  }

  useEffect(() => {
    if (authenticated) {
      handleUserPlaylists(user)
    }
  }, [user])

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
    setUserPlaylists(null)
    setSelectedSong(null)
    setSelectedPlaylist(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }
  return (
    <div className="App">
      <Header LogOut={LogOut} user={user} authenticated={authenticated} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route
            path="/userLogin"
            element={
              <Login
                setUser={setUser}
                toggleAuthenticated={toggleAuthenticated}
              />
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
