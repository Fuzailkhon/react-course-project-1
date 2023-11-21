import { Link } from "react-router-dom";

export interface ICard {
  title: string | string[];
  info?: string | string[];
  detailId: string;
}

export default function Card({ title, info, detailId }: ICard) {
  return (
    <div className="card" data-testid="card">
      <h2>{title}</h2>
      <p>{info}</p>
      <Link to={`details/${detailId}`} >More info</Link>
    </div>
  );
}
