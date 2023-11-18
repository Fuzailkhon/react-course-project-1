import { Outlet } from "react-router-dom";
import Pagination from "./Pagination";

export default function CardList() {
  return (
    <>
      <Pagination perPage={10} totalCount={3} />
      <Outlet/>
    </>
  );
}
