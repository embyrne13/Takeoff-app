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
          <label htmlFor="search">Leaving from </label>
          <input
            className="searchField"
            id="search"
            onChange={handleFormChange}
            placeholder="Leaving from"
          ></input>
          <label htmlFor="search">Going to </label>
          <input
            className="searchField"
            id="search"
            onChange={handleFormChange}
            placeholder="Going to"
          ></input>
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
