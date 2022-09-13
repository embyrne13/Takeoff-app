import { useState } from 'react'
import FlightSearch from '../Components/FlightSearch'
import FlightDetails from '../Components/FlightDetails'
import { BASE_URL } from '../services/api'
import axios from 'axios'
const Home = ({ flightSearchFilters, setFlightSearchFilters, setResults }) => {
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [selectValue, setSelectValue] = useState('')
  const [destValue, setDestValue] = useState('')
  const [isToggled, setIsToggled] = useState(true)
  const handleSelectChange = (e) => {
    setSelectValue(e.target.value)
  }
  const handleDestValue = (e) => {
    setDestValue(e.target.value)
  }
  let origin = selectValue
  let destination = destValue

  const handleSearchSubmit = async (e, value) => {
    e.preventDefault()

    await axios
      .get(`${BASE_URL}/api/flight?destination=${destination}&origin=${origin}`)

      .then(function (response) {
        console.log(response)
        searchResults.push(response.data)
        setResults(response.data)
        console.log(searchResults)
        setIsToggled(false)
      })
      .catch(function (error) {
        console.error(error)
      })

    setSearch(value)
  }

  return (
    <div className="home">
      <div className="flightSearch">
        <div id="searchOptions">
          {isToggled ? (
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
              isToggled={isToggled}
              setIsToggled={setIsToggled}
            />
          ) : (
            <div>
              {searchResults[0].map((flight, index) => (
                <FlightDetails
                  key={index}
                  flight={flight}
                  setResults={setResults}
                  isToggled={isToggled}
                  setIsToggled={setIsToggled}
                  searchResults={searchResults}
                  setSearchResults={setSearchResults}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home
