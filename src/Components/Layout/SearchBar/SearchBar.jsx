import React from 'react'
import PropTypes from "prop-types"

function SearchBar({searchResultStr,handleOnChange}) {
  return (
    <div className="ticket-lsiting-div-search-bar">
           <label>Search :</label>
           <input type="text" placeholder='Search..' 
             name="searchTicket"
             value={searchResultStr}
             onChange={handleOnChange}
           />
     </div>
  )
}

export default SearchBar

SearchBar.propTypes = {
    searchResultStr: PropTypes.string.isRequired,
    handleOnChange: PropTypes.func.isRequired
}

