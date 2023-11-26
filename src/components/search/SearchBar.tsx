import { FormEvent, useEffect, useState } from 'react';
import searchSectionStyles from './search.module.css';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { addSearchVal, initSearchSlice } from '@/store/Features/searchSlice';

export function SearchBar() {
  const searchVal = useAppSelector(state => state.searchList.currentValue)
  const searchList = useAppSelector((state) => state.searchList.values);
  const [searchText, setSearchText] = useState(searchVal);
  const dispatch = useAppDispatch();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const searchVal = searchText.trim();
    if (searchVal === '') return;
    dispatch(addSearchVal(searchVal));
  }

  useEffect(() => {
    const values = JSON.parse(localStorage.getItem('search') || '[""]')
    dispatch(initSearchSlice(values))
  }, [dispatch])

  return (
    <>
      <form className={searchSectionStyles.searchBar} onSubmit={handleSubmit}>
        <input
          type="search"
          list="search-list"
          placeholder="Type to find"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <datalist id="search-list" data-testid="search-list">
          {searchList &&
            searchList.map((val: string) => <option value={val} key={val} />)}
        </datalist>
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </form>
    </>
  );
}
