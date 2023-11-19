import { animeApi } from '../state/api/animeSearch';
import Card from './Card';
import { useAppSelector } from '../hooks/redux';
import { useEffect, useState } from 'react';
import Pagination from './Pagination';
import { Outlet } from 'react-router-dom';

export default function CardList() {
  const [skip, setSkip] = useState(true);
  const currentSearchVal = useAppSelector(
    (state) => state.searchList.currentValue
  );
  const isLoading = useAppSelector((state) => state.loadingFlags.animeLoading);
  const { data: resultsList } = animeApi.useAnimeSearchQuery(currentSearchVal, {
    skip,
    refetchOnMountOrArgChange: true,
  });

  useEffect(
    () => (currentSearchVal === '' ? setSkip(true) : setSkip(false)),
    [currentSearchVal]
  );

  return (
    <>
      {isLoading ? (
        <p>Loading ..</p>
      ) : (
        <div className="card-list">
          {resultsList &&
            resultsList.data.map((result) => (
              <Card
                key={result.mal_id}
                title={result.title_english}
                info={result.rating}
                detailId={String(result.mal_id)}
              />
            ))}
          <div className="pagination-wrapper">
            <Pagination perPage={5} totalCount={10} />
          </div>
          <Outlet/>
        </div>
      )}
    </>
  );
}
