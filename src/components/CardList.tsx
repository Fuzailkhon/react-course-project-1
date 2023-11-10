import { useContext } from 'react';
import Card from './Card';
import { IResultsListContext, ResultsListContext } from '../AppContext';

export default function CardList() {
  const { resultsList, isLoading } = useContext(
    ResultsListContext
  ) as IResultsListContext;
  return (
    <div className="card-list">
      {!isLoading ? (
        resultsList.map((e, i) => {
          return <Card title={e.name} info={e.created} key={i} />;
        })
      ) : (
        <p>
          Loading ...
        </p>
      )}
    </div>
  );
}
