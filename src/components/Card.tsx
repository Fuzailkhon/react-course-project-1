import { Link } from 'react-router-dom';

export interface ICard {
  title: string | string[];
  info?: string | string[];
  detailId: string;
}

export default function Card({ title, info, detailId }: ICard) {
  return (
    <div className="card" data-testid="card">
      <Link to={`details/${detailId}`}>
        <h4>{title}</h4>
        <p>{info}</p>
      </Link>
    </div>
  );
}
