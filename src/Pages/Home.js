import { useEffect, useState } from 'react'
import FlightSearch from '../Components/FlightSearch'
import FlightDetails from '../Components/FlightDetails'
import { getFlight } from '../services/Auth'
import axios from 'axios'
const Home = ({
  flightSearchFilters,
  setFlightSearchFilters,
  handleFlightSelect
  // setSelectedTicket
}) => {
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const handleSearchSubmit = async (e, value) => {
    e.preventDefault()
    await axios
      .request()
      .then(function (response) {
        setSearchResults(response.data.items)
        console.log(searchResults)
      })
      .catch(function (error) {
        console.error(error)
      })

    setSearch(value)
  }
  // useEffect(() => {
  //   setSelectedTicket(null)
  // }, [])

  return (
    <div className="home">
      <div className="flightSearch">
        <div id="searchOptions">
          <FlightSearch
            search={search}
            setSearch={setSearch}
            flightSearchFilters={flightSearchFilters}
            setFlightSearchFilters={setFlightSearchFilters}
            handleSearchSubmit={handleSearchSubmit}
          />
        </div>
        <div>
          {searchResults?.map((flight, index) => (
            <FlightDetails
              key={flight.data.id}
              flight={flight}
              handleFlightSelect={() => handleFlightSelect(flight)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
