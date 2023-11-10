import React, { createContext, useCallback, useEffect, useState } from 'react';
import { ISWAPIResource } from './models';
import { useSearchParams } from 'react-router-dom';
import { fetchResource } from './search-people.api';

export interface ISearchContext {
  searchVal: string;
  updateSearchValue: (newVal: string) => void;
}

export interface IResultsListContext {
  resultsList: ISWAPIResource[];
  isLoading: boolean;
}

export const SearchContext = createContext<ISearchContext | null>(null);
export const ResultsListContext = createContext<IResultsListContext | null>(
  null
);

export function AppContext({ children }: { children: React.ReactNode }) {
  const [searchVal, setSearchVal] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [resultsList, setResultsList] = useState<ISWAPIResource[] | []>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchForPeople = useCallback(async () => {
    setResultsList([]);
    setIsLoading(true);
    const { currentPageResults } = await fetchResource(
      searchParams.get('q') || ''
    );
    setResultsList(currentPageResults || []);
    setIsLoading(false);
  }, [searchParams]);

  async function updateSearchValue(newVal: string) {
    newVal = newVal.trim();
    setSearchVal(newVal);
    if (newVal === searchParams.get('q')) return;
    setSearchParams(
      (prev) => {
        prev.set('q', newVal);
        return prev;
      },
      { replace: true }
    );
  }
  useEffect(() => {
    if (searchParams.get('q') !== '') {
      setSearchVal(searchParams.get('q') || '');
      searchForPeople();
    }
  }, [searchForPeople, searchParams]);

  return (
    <ResultsListContext.Provider value={{ resultsList, isLoading }}>
      <SearchContext.Provider value={{ searchVal, updateSearchValue }}>
        {children}
      </SearchContext.Provider>
    </ResultsListContext.Provider>
  );
}
