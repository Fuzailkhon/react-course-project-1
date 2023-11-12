import { useContext } from 'react';
import { ISearchContext, SearchContext } from '../AppContext';

export default function Pagination({
  perPage,
  totalCount,
}: {
  perPage: number;
  totalCount: number;
}) {
  const paginationNumbers: number[] = [];
  const { currentPage, updateCurrentPage } = useContext(
    SearchContext
  ) as ISearchContext;
  for (let i = 1; i <= Math.ceil(totalCount / perPage); i++) {
    paginationNumbers.push(i);
  }
  return (
    <div className="pagination-wrapper">
      <div className="pagination">
        {paginationNumbers.map((pageNumber) => (
          <button
            className={pageNumber === currentPage ? 'active' : ''}
            key={pageNumber}
            onClick={() => updateCurrentPage(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </div>
  );
}
