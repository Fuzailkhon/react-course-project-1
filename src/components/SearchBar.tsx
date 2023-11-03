import { useState } from 'react';

export default function SearchBar() {
  const [searchVal, setSearchVal] = useState('');
  return (
    <>
      <form className='search-bar'>
        <input
          type="text"
          onChange={(e) => setSearchVal(e.target.value)}
          value={searchVal}
          placeholder='Type to find'
        />
        <button type="submit">
          <i className='fa fa-search'></i>
        </button>
      </form>
      <p>{searchVal}</p>
    </>
  );
}
