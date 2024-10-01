import React, { Fragment } from "react"
import Title from "../components/Title"
import EmployeeList from "../components/EmployeeList"

export default function Employees() {
  return (
    <Fragment>
      <Title title="Employees" />
      <EmployeeList />
    </Fragment>
  )
}
