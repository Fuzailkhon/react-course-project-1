import { useContext } from "react";
import { Link } from "react-router-dom";
import { ISearchContext, SearchContext } from "../AppContext";

export interface ICard {
  title: string | string[];
  info?: string | string[];
  detailNum: string;
}

export default function Card({ title, info, detailNum }: ICard) {
  const {searchVal, currentPage} = useContext(SearchContext) as ISearchContext
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{info}</p>
      <Link to={'details/' + detailNum + `/?q=${searchVal}&page=${currentPage}`} >More info</Link>
    </div>
  );
}
