import React from "react"
import { Link } from "react-router-dom"

const Error = () => {
  return (
    <div className="error">
      <h1>Oops !</h1>
      <h2>Page non trouvée.</h2>
      <Link to="/">
        <i className="fa fa-chevron-circle-right" aria-hidden="true"></i>
        Revenir à la page d&apos;accueil
      </Link>
    </div>
  )
}

export default Error
