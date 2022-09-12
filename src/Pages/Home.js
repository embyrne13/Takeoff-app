import { useEffect, useState } from 'react'
import FlightSearch from '../Components/FlightSearch'
import FlightDetails from '../Components/FlightDetails'
import { getFlight } from '../services/Auth'
import Client, { BASE_URL } from '../services/api'
import axios from 'axios'
const Home = ({
  flightSearchFilters,
  setFlightSearchFilters,
  handleFlightSelect
  // setSelectedTicket
}) => {
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [selectValue, setSelectValue] = useState('')
  const [destValue, setDestValue] = useState('')

  const handleSelectChange = (e) => {
    setSelectValue(e.target.value)
  }
  const handleDestValue = (e) => {
    setDestValue(e.target.value)
  }
  let origin = selectValue
  let destination = destValue
  console.log(destValue)
  console.log(selectValue)
  // const getFlight = async () => {
  //   console.log('got here')
  //   try {
  //     const res = await Client.get(
  //       `/api/flight?destination=${destination}&origin=${origin}`
  //     )
  //     return res.data
  //   } catch (error) {
  //     throw error
  //   }
  // }
  const handleSearchSubmit = async (e, value) => {
    e.preventDefault()

    await axios
      .get(`${BASE_URL}/api/flight?destination=${destination}&origin=${origin}`)

      .then(function (response) {
        console.log(response)
        searchResults.push(response.data)
        // setSearchResults(response.data)
        // setSearchResults(searchResults)
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
          <div>
            {searchResults.map((flight, index) => (
              // <div key={index}>
              //   <p>{flight.origin}</p>
              //   <p>{flight.destination}</p>
              // </div>
              <FlightDetails key={index} flight={flight} />
            ))}
          </div>
          <FlightSearch
            search={search}
            setSearch={setSearch}
            flightSearchFilters={flightSearchFilters}
            setFlightSearchFilters={setFlightSearchFilters}
            handleSearchSubmit={handleSearchSubmit}
            selectValue={selectValue}
            handleSelectChange={handleSelectChange}
            destValue={destValue}
            handleDestValue={handleDestValue}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
