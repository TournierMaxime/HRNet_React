import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"
import "primeflex/primeflex.css"
import "primereact/resources/themes/fluent-light/theme.css"
import React, { Fragment } from "react"
import { BrowserRouter as Router, Routes } from "react-router-dom"
import CommonRoutes from "./router/routes"

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>{CommonRoutes()}</Routes>
      </Router>
    </Fragment>
  )
}

export default App
