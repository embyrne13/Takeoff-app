const SearchBar = ({
  search,
  setSearch,
  setSearchFilters,
  handleSearchSubmit
}) => {
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
          <label htmlFor="search">SEARCH: </label>
          <input
            className="searchField"
            id="search"
            onChange={handleFormChange}
            placeholder="Leaving from"
          ></input>
          <input
            className="searchField"
            id="search"
            onChange={handleFormChange}
            placeholder="Going to"
          ></input>
          <input
            className="searchField"
            id="search"
            onChange={handleFormChange}
            placeholder="Departing"
          ></input>
          <input
            className="searchField"
            id="search"
            onChange={handleFormChange}
            placeholder="Arriving"
          ></input>
        </div>
        <button className="buttonZ" type="reset" value="Reset">
          Reset
        </button>
        <button className="buttonz" type="submit">
          Search
        </button>
      </form>
    </div>
  )
}

export default SearchBar
