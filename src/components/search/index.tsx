import { Pagination } from '../results/Pagination/Pagination';
import { SearchBar } from './SearchBar';
import searchSectionStyles from './search.module.css';

export default function SearchSection() {
  return (
    <>
      <section className={searchSectionStyles.searchSection}>
        <SearchBar />
      </section>
    </>
  );
}
