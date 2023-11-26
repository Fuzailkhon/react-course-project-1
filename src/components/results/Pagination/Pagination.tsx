import { useState } from 'react';
import paginationStyles from './pagination.module.css';

interface IPaginationProps {
  perPage: number;
  totalCount: number;
}

export function Pagination({ perPage, totalCount }: IPaginationProps) {
  const [limit, setLimit] = useState(10);
  const paginationNumbers: number[] = [];
  for (let i = 1; i <= Math.ceil(totalCount / perPage); i++) {
    paginationNumbers.push(i);
  }
  return (
    <div className={paginationStyles.pagination}>
      <input
        type="number"
        list="quantities"
        min="12"
        step="12"
        className={paginationStyles.paginationLimit}
      />
      {paginationNumbers.map((pageNumber) => (
        <button key={pageNumber}>{pageNumber}</button>
      ))}
    </div>
  );
}
