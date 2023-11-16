import { FormEvent, FormEventHandler, useContext, useEffect, useState } from 'react';
import { ISearchContext, SearchContext } from '../AppContext';
import useLocalStorage from '../hooks/useLocalStorage';

export default function SearchBar() {
  const {searchVal, updateSearchValue} = useContext(SearchContext) as ISearchContext
  const [searchText, setSearchText] = useState('')
  const [searchList, setSearchList] = useLocalStorage('search', '[]')

  const handleSubmit:FormEventHandler<HTMLFormElement> = (event:FormEvent) =>{
    event.preventDefault()
    const searchVal = searchText.trim()
    if(searchVal === "")return
    updateSearchValue(searchVal)
    if (!searchList.includes(searchVal)) {
      searchList.push(searchVal);
    }
    setSearchList(JSON.stringify(searchList))
  }

  useEffect(() => {
    if(searchVal !== ''){
      setSearchText(searchVal)
    }
  }, [setSearchText, searchVal])

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
