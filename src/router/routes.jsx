import React, { Fragment } from "react"
import Home from "../pages/Home"
import Employees from "../pages/Employees"
import Error from "../pages/Error"
import { Route } from "react-router-dom"

const CommonRoutes = () => {
  const routes = [
    {
      path: "/",
      name: "Home",
      element: <Home />,
    },
    {
      path: "/employees",
      name: "Employees",
      element: <Employees />,
    },
    {
      path: "*",
      name: "Error",
      element: <Error />,
    },
  ]

  return (
    <Fragment>
      {routes.map((route, idx) => {
        return <Route key={idx} path={route.path} element={route.element} />
      })}
    </Fragment>
  )
}

export default CommonRoutes
