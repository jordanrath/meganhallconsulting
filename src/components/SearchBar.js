import React, { useMemo, useState } from 'react'
import { emptyArr } from '../utils/funcUtils';

const SearchBar = ({ id, placeholder, resultsId, data = {}, searchFunc = emptyArr, renderFunc = emptyArr }) => {
  const [searchText, setSearchText] = useState('');

  const matches = useMemo(() => {
    return searchFunc(data, searchText);
  }, [data, searchFunc, searchText]);


  const itemsJSX = useMemo(() => {
    return renderFunc(matches, searchText);
  }, [renderFunc, searchText, matches]);
  
  return (
    <div className='search-container'>
        <div className='search-bar'>
            <input value={searchText} onChange={(e) => {
              setSearchText(e.currentTarget.value)
              }} type='text' id={id} className='search__input' placeholder={placeholder} />             
          <button className='search__submit'>
            <span className="material-symbols-outlined search-icon">
              search
            </span>
          </button>
        </div>
        <ul id={resultsId}>
          {itemsJSX}
        </ul>
    </div>
  )
}

export default SearchBar;
