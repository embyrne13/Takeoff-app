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
            <option className="search" value="Select City">
              Select City
            </option>
            <option className="search" value="New York">
              New York
            </option>
            <option className="search" value="Madrid">
              Madrid
            </option>
            <option className="search" value="Paris">
              Paris
            </option>
            <option className="search" value="London">
              London
            </option>
            <option className="search" value="Lima">
              Lima
            </option>
            <option className="search" value="Warsaw">
              Warsaw
            </option>
            <option className="search" value="Amsterdam">
              Amsterdam
            </option>
            <option className="search" value="Rome">
              Rome
            </option>
            <option className="search" value="Dublin">
              Dublin
            </option>
            <option className="search" value="Rome">
              Rome
            </option>
            <option className="search" value="Lisbon">
              Lisbon
            </option>
            <option className="search" value="Copenhagen">
              Copenhagen
            </option>
          </select>
          <label htmlFor="search">Going to {''}</label>
          <select
            className="search"
            defaultValue={props.destValue}
            onChange={handleDestValue}
          >
            <option className="search" value="Select City">
              Select City
            </option>
            <option className="search" value="New York">
              New York
            </option>
            <option className="search" value="Madrid">
              Madrid
            </option>
            <option className="search" value="Paris">
              Paris
            </option>
            <option className="search" value="London">
              London
            </option>
            <option className="search" value="Lima">
              Lima
            </option>
            <option className="search" value="Warsaw">
              Warsaw
            </option>
            <option className="search" value="Amsterdam">
              Amsterdam
            </option>
            <option className="search" value="Rome">
              Rome
            </option>
            <option className="search" value="Dublin">
              Dublin
            </option>
            <option className="search" value="Rome">
              Rome
            </option>
            <option className="search" value="Lisbon">
              Lisbon
            </option>
            <option className="search" value="Copenhagen">
              Copenhagen
            </option>
          </select>
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
        <button
          className="buttonz"
          type="submit"
          // onClick={() => navigate('/results')}
        >
          Search Flight
        </button>
      </form>
    </div>
  )
}

export default SearchBar
