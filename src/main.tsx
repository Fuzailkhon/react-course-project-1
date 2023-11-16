import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import { Details } from './components/Details.tsx';
import NotFoundPage from './NotFoundPage.tsx';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path='details/:id' element={<Details/>}/>
      <Route path='*' element={<NotFoundPage/>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
