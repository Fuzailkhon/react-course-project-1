import React, { createContext, useCallback, useEffect, useState } from 'react';
import { IPeople, ISWAPIResource } from './models';
import { useSearchParams } from 'react-router-dom';
import { SearchPeopleObj } from './search-people.api';

export interface ISearchContext {
  searchVal: string;
  currentPage: number;
  updateCurrentPage: (page: number) => void;
  updateSearchValue: (newVal: string) => void;
}

export interface IResultsListContext {
  resultsCount: number;
  resultsList: ISWAPIResource[];
  isLoading: boolean;
  getResourceById: (
    id: string
  ) => Promise<{ success: boolean; result?: IPeople }>;
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
  const [resultsCount, setResultsCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  // const getNewPage = useCallback(async () => {
  //   setIsLoading(true);
  //   setResultsList([])
  //   await SearchPeopleObj.fetchPage(currentPage);
  //   const count = SearchPeopleObj.resultsCount;
  //   setResultsList(SearchPeopleObj.currenPageResults || []);
  //   setIsLoading(false);
  //   setResultsCount(count || 10);
  // }, [currentPage]);

  const searchForPeople = useCallback(async () => {
    setIsLoading(true);
    setResultsList([]);
    const page = parseInt(searchParams.get('page') || '1');
    await SearchPeopleObj.searchForPeople(searchParams.get('q') || '', page);
    const count = await SearchPeopleObj.resultsCount;
    setResultsList(SearchPeopleObj.currenPageResults || []);
    setIsLoading(false);
    setResultsCount(count || 10);
  }, [searchParams]);

  async function updateCurrentPage(page: number) {
    if (page === parseInt(searchParams.get('page') || '1')) return;
    setSearchParams(
      (prev) => {
        prev.set('page', page.toString());
        return prev;
      },
      { replace: true }
    );
  }

  async function updateSearchValue(newVal: string) {
    newVal = newVal.trim();
    if (newVal === searchParams.get('q')) return;
    setSearchParams(
      (prev) => {
        prev.set('q', newVal);
        prev.delete('page');
        return prev;
      },
      { replace: true }
    );
  }

  async function getResourceById(id: string) {
    const response = await SearchPeopleObj.getDetails(id);
    let responseDetails: IPeople;
    if (response !== null) {
      responseDetails = response;
      return {
        success: true,
        result: responseDetails,
      };
    }
    return {
      success: false
    };
  }

  useEffect(() => {
    const page: number = parseInt(searchParams.get('page') || '1');
    const query: string = searchParams.get('q') || '';
    if (query === '' || !query) return;
    page ? setCurrentPage(page) : setCurrentPage(1);
    searchForPeople();
    setSearchVal(searchParams.get('q') || '');
  }, [searchForPeople, searchParams]);

  return (
    <ResultsListContext.Provider
      value={{ resultsList, isLoading, resultsCount, getResourceById }}
    >
      <SearchContext.Provider
        value={{ searchVal, updateSearchValue, currentPage, updateCurrentPage }}
      >
        {children}
      </SearchContext.Provider>
    </ResultsListContext.Provider>
  );
}
