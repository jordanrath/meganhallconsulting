import React from 'react'

const SearchBar = ({ id, placeholder, resultsId }) => {
  return (
    <div className='search-container'>
        <form>
            <input type='search' id={id} className='search-field' placeholder={placeholder} />
        </form>
        <ul id={resultsId}></ul>
    </div>
  )
}

export default SearchBar