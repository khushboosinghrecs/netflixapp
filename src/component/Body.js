import React, { useEffect } from 'react'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login'
import { Error } from './Error'


const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/browse",
      element: <Browse />
    },
    {
      path: '/error',
      element: <Error />
    }

  ]);


  return (
      <RouterProvider router={appRouter} />
  )
}

export default Body