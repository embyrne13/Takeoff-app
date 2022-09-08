import { useEffect, useState } from 'react'
import FlightSearch from '../Components/FlightSearch'
import FlightDetails from '../Components/FlightDetails'

const Home = ({
  flightSearchFilters,
  setFlightSearchFilters,
  handleFlightSelect
  // setSelectedTicket
}) => {
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState(null)

  const axios = require('axios')

  const options = {
    method: 'GET',
    url: 'https://kayak-flights.p.rapidapi.com/results',
    params: { token: 'API_KEY', m: '5' },
    headers: {
      'X-RapidAPI-Key': '9765fe4351mshc8da620e62d9b76p11e4bajsn08ea7a569977',
      'X-RapidAPI-Host': 'kayak-flights.p.rapidapi.com'
    }
  }

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data)
    })
    .catch(function (error) {
      console.error(error)
    })

  const handleSearchSubmit = async (e, value) => {
    e.preventDefault()
    await axios
      .request(options)
      .then(function (response) {
        setSearchResults(response.data.tracks.items)
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
