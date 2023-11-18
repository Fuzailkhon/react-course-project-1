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
import { Provider } from "react-redux";
import { store } from './state/store.ts';

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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
