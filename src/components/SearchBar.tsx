import { useState } from 'react';

interface ISearchBarProps {
  submitFunc: (param: string) => void;
}

export default function SearchBar({ submitFunc }: ISearchBarProps) {
  const [searchVal, setSearchVal] = useState('');

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    if (searchVal.trim() === '') return;

    submitFunc(searchVal);
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
