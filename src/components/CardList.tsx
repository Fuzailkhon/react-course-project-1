import { useContext } from 'react';
import Card from './Card';
import { IResultsListContext, ResultsListContext } from '../AppContext';
import Pagination from './Pagination';
import { Outlet, useSearchParams } from 'react-router-dom';

export default function CardList() {
  const { resultsList, isLoading, resultsCount } = useContext(
    ResultsListContext
  ) as IResultsListContext;
  const [searchParams] = useSearchParams();
  const searchVal = searchParams.get('q');
  return (
    <>
      {!searchVal && <p>Please type to search Star Wars API</p>}
      {!isLoading && !!searchVal && !resultsList.length && <p>Sorry Resource not found</p>}
      {!!isLoading && <p>Loading ...</p>}
      {!!resultsList.length && (
        <div className="card-list">
          {resultsList.map((e, i) => {
            const detailsNum = e.url.split('/').at(-2) || ''
            return <Card title={e.name} info={e.created} key={i} detailNum={detailsNum} />;
          })}
          <Pagination perPage={resultsList.length} totalCount={resultsCount} />
        </div>
      )}
      <Outlet/>
    </>
  );
}
