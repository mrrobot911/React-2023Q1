import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@app/App.tsx';
import '@app/index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CardDeteil from '@features/components/CardDeteil';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <CardDeteil />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
