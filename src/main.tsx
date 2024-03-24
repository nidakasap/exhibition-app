import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './main.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from './pages/NotFoundPage.tsx';
import Career from './pages/Career.tsx';
import Contact from './pages/Contact.tsx';
import Events from './pages/Events.tsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/events",
    element: <Events />,
  },
  {
    path: "/career",
    element: <Career />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode >
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
