import { FormEvent, FormEventHandler, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';

export default function SearchBar() {
  const [searchText, setSearchText] = useState('')
  const searchList = useAppSelector(state => state.searchList)
  const dispatch = useAppDispatch()

  const handleSubmit:FormEventHandler<HTMLFormElement> = (event:FormEvent) =>{
    event.preventDefault()
    const searchVal = searchText.trim()
    if(searchVal === "")return
  }

  return (
    <>
      <form className="search-bar" onSubmit={handleSubmit}>
        <input
          type="search"
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          list="search-list"
          placeholder="Type to find"
        />
        <datalist id='search-list' data-testid="search-list">
          {searchList && searchList.map((val: string) => <option value={val} key={val}/>)}
        </datalist>
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </form>
    </>
  );
}
