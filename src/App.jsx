import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements,RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Model1 from './pages/model1.jsx'
import './style/app.css'
import Model2 from './pages/model2.jsx';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomePage />
    },
    {
      path: "/model1",
      element: <Model1 />
    },
    {
      path: "/model2",
      element: <Model2 />
    }
  ]
)

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App;
