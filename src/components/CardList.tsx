import Card from './Card';

interface ICardList {
  valuesList: ICard[];
}

type ICard = {
  title: string;
  info: string;
};

export default function CardList({ valuesList }: ICardList) {
  return (
    <div className="card-list">
      {valuesList &&
        valuesList.map((e, i) => {
          return <Card title={e.title} info={e.info} key={i} />;
        })}
    </div>
  );
}
