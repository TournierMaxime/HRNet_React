import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"
import "primeflex/primeflex.css"
import "primereact/resources/themes/fluent-light/theme.css"
import "./styles/App.scss"
import React from "react"
import { BrowserRouter as Router, Routes } from "react-router-dom"
import CommonRoutes from "./router/routes"
import { PersistGate } from "redux-persist/integration/react"
import { store, persistor } from "./redux/store.js"
import { Provider } from "react-redux"

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>{CommonRoutes()}</Routes>
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default App
