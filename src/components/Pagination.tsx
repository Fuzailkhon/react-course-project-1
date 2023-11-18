export default function Pagination({
  perPage,
  totalCount,
}: {
  perPage: number;
  totalCount: number;
}) {
  const paginationNumbers: number[] = [];
  for (let i = 1; i <= Math.ceil(totalCount / perPage); i++) {
    paginationNumbers.push(i);
  }
  return (
    <div className="pagination-wrapper">
      <div className="pagination">
        {paginationNumbers.map((pageNumber) => (
          <button key={pageNumber}>
            {pageNumber}
          </button>
        ))}
      </div>
    </div>
  );
}
