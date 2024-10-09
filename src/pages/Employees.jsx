import React, { Fragment, Suspense, lazy } from "react"
import Title from "../components/Title"

// Utilisation de React.lazy() pour charger EmployeeList
const EmployeeList = lazy(() => import("../components/EmployeeList"))

export default function Employees() {
  return (
    <Fragment>
      <Title title="Employees" />

      <Suspense fallback={<div>Loading employee datatable...</div>}>
        <EmployeeList />
      </Suspense>
    </Fragment>
  )
}
