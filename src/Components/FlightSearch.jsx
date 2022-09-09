const SearchBar = ({ setSearch, setSearchFilters, handleSearchSubmit }) => {
  const handleFormChange = (e) => {
    setSearch(e.target.value)
  }

  const handleFormReset = () => {
    setSearchFilters({})
  }

  return (
    <div className="searchCard">
      <form onReset={handleFormReset} onSubmit={handleSearchSubmit}>
        <div className="searchField">
          <label htmlFor="search">Leaving from {''}</label>
          <select className="search">
            <option className="search" value="New York">
              New York
            </option>
            <option className="search" value="madrid">
              Madrid
            </option>
            <option className="search" value="paris">
              Paris
            </option>
            <option className="search" value="london">
              London
            </option>
          </select>
          {/* <input
            className="searchField"
            id="search"
            onChange={handleFormChange}
            placeholder="Leaving from"
          ></input> */}
          <label htmlFor="search">Going to {''}</label>
          <select className="search">
            <option className="search" value="New York">
              New York
            </option>
            <option className="search" value="madrid">
              Madrid
            </option>
            <option className="search" value="paris">
              Paris
            </option>
            <option className="search" value="london">
              London
            </option>
          </select>
          {/* <input
            className="searchField"
            id="search"
            onChange={handleFormChange}
            placeholder="Going to"
          ></input> */}
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
