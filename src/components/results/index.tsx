import { useAppSelector } from '@/hooks/redux';
import { CardList } from './CardList/CardList';
import resultsSectionstyles from './results.module.css';
import { useEffect, useState } from 'react';
import { animeApi } from '@/store/api/animeApi';
import { Pagination } from './Pagination/Pagination';

export default function ResultsSection() {
  const [skip, setSkip] = useState(true);
  const currentSearch = useAppSelector(state => state.searchList.currentValue)
  const { anime, pagination } = useAppSelector((state) => state.anime);
  const searchVal = useAppSelector((state) => state.searchList.currentValue);
  const { data } = animeApi.useAnimeSearchQuery(searchVal, { skip });

  useEffect(() => {
    if (currentSearch) {
      setSkip(false);
    }
  }, [currentSearch]);

  return (
    <section className={resultsSectionstyles.resultsSection}>
      {!!anime.length && <CardList resultsList={anime || []} />}
      {!!anime.length && <Pagination perPage={10} totalCount={100} />}
    </section>
  );
}
