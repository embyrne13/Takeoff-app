const SearchBar = (
  {
    setSearch,
    setSearchFilters,
    handleSearchSubmit,
    handleSelectChange,
    handleDestValue
  },
  props
) => {
  const handleFormChange = (e) => {
    setSearch(e.target.value)
  }

  const handleFormReset = () => {
    setSearchFilters({})
  }

  const cityArray = [
    'New York',
    'Madrid',
    'Paris',
    'London',
    'Lima',
    'Warsaw',
    'Amsterdam',
    'Rome',
    'Dublin',
    'Lisbon',
    'Copenhagen'
  ]

  const getCityOptions = (cities) => {
    cities.map((city) => {
      return (
        <option className="search" value={city} id={`city option: ${city}`}>
          {city}
        </option>
      )
    })
  }

  return (
    <div className="searchCard">
      <form onReset={handleFormReset} onSubmit={handleSearchSubmit}>
        <div className="searchField">
          <label htmlFor="search">Leaving from {''}</label>
          <select
            className="search"
            defaultValue={props.selectValue}
            onChange={handleSelectChange}
          >
            <>{getCityOptions(cityArray)}</>
          </select>
          <label htmlFor="search">Going to {''}</label>
          <select
            className="search"
            defaultValue={props.destValue}
            onChange={getCityOptions(cityArray)}
          ></select>
          <label htmlFor="search">Departing </label>
          <input
            type="date"
            className="searchField"
            id="search"
            onChange={handleFormChange}
            placeholder="Departing"
          ></input>
          <label htmlFor="search">Returning </label>
          <input
            type="date"
            className="searchField"
            id="search"
            onChange={handleFormChange}
            placeholder="Returning"
          ></input>
        </div>
        <button className="buttonz" type="submit">
          Search Flight
        </button>
      </form>
    </div>
  )
}

export default SearchBar
