import React, { Fragment, Suspense, lazy } from "react"
import Title from "../components/Title"

// Utilisation de React.lazy() pour charger CreateEmployee
const CreateEmployee = lazy(() => import("../components/CreateEmployee"))

export default function Home() {
  return (
    <Fragment>
      <Title title={"Home"} />

      <Suspense fallback={<div>Loading employee form...</div>}>
        <CreateEmployee />
      </Suspense>
    </Fragment>
  )
}
