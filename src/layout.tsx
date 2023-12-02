import { ReactNode } from 'react';
import { Link, Outlet } from 'react-router-dom';

export interface ILayout {
  children: ReactNode;
}

export function Layout() {
  return (
    <>
      <header>
        <nav className="navbar">
          <ul className="navbar__list">
            <li className="navabar__list__item">
              <Link to="/" className="active">
                Home
              </Link>
            </li>
            <li className="navabar__list__item">
              <Link to="form-no-control">Form ordinary</Link>
            </li>
            <li className="navabar__list__item">
              <Link to="form-rhf">Form RHF</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
