import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './scss/App.scss';
import Home from './pages/Home/Home';
import Heroes from './pages/Heroes/Heroes';
import Divisions from './pages/Divisions/Divisions';
import TimeOfHeroes from './pages/TimeOfHeroes/TimeOfHeroes';
import Info from './pages/Info';
import Preview from './pages/Preview/Preview';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <Preview />,
  },
  {
    path: '/main',
    element: <Home />,
  },
  {
    path: '/heroes',
    element: <Heroes />,
  },
  {
    path: '/divisions',
    element: <Divisions />,
  },
  {
    path: '/time',
    element: <TimeOfHeroes />,
  },
  {
    path: '/info',
    element: <Info />,
  },
]);
root.render(<RouterProvider router={router} />);
