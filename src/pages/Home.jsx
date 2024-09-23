import React, { Fragment } from "react"
import CreateEmployee from "../components/CreateEmployee"
import Title from "../components/Title"

export default function Home() {
  return (
    <Fragment>
      <Title title={"Home"} />
      <CreateEmployee />
    </Fragment>
  )
}
