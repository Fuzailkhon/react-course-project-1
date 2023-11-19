import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
      <h1>Page Not Found</h1>
      <p>Please take link to home page:</p>
      <Link to="/">Home</Link>
    </>
  );
}
