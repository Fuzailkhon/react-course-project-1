import { useState } from 'react';

export default function SearchBar() {
  const [searchVal, setSearchVal] = useState('');

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };
  return (
    <>
      <form className="search-bar" onSubmit={submitHandler}>
        <input
          type="text"
          onChange={(e) => setSearchVal(e.target.value)}
          value={searchVal}
          placeholder="Type to find"
        />
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </form>
      <p>{searchVal}</p>
    </>
  );
}
