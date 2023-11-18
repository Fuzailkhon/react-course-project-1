import { useContext } from "react";
import { Link } from "react-router-dom";

export interface ICard {
  title: string | string[];
  info?: string | string[];
  detailNum: string;
}

export default function Card({ title, info, detailNum }: ICard) {
  return (
    <div className="card" data-testid="card">
      <h2>{title}</h2>
      <p>{info}</p>
      <Link to={'details/' + detailNum + `/?q=`} >More info</Link>
    </div>
  );
}
