// index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/Routes';
import { createBrowserRouter } from 'react-router-dom';

type CustomRouterType = ReturnType<typeof createBrowserRouter>;
const router: CustomRouterType = createBrowserRouter(routes);

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);

reportWebVitals();
