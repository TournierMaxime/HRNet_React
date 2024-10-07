import React, { useState } from "react"
import Input from "./Input"
import { Button } from "primereact/button"
import useOnCreate from "../hooks/useOnCreate"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addEmployee } from "../redux/employeeSlice"
import { Modal } from "tm-react-modal"

export default function CreateEmployee() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const states = [
    {
      name: "Alabama",
      abbreviation: "AL",
    },
    {
      name: "Alaska",
      abbreviation: "AK",
    },
    {
      name: "American Samoa",
      abbreviation: "AS",
    },
    {
      name: "Arizona",
      abbreviation: "AZ",
    },
    {
      name: "Arkansas",
      abbreviation: "AR",
    },
    {
      name: "California",
      abbreviation: "CA",
    },
    {
      name: "Colorado",
      abbreviation: "CO",
    },
    {
      name: "Connecticut",
      abbreviation: "CT",
    },
    {
      name: "Delaware",
      abbreviation: "DE",
    },
    {
      name: "District Of Columbia",
      abbreviation: "DC",
    },
    {
      name: "Federated States Of Micronesia",
      abbreviation: "FM",
    },
    {
      name: "Florida",
      abbreviation: "FL",
    },
    {
      name: "Georgia",
      abbreviation: "GA",
    },
    {
      name: "Guam",
      abbreviation: "GU",
    },
    {
      name: "Hawaii",
      abbreviation: "HI",
    },
    {
      name: "Idaho",
      abbreviation: "ID",
    },
    {
      name: "Illinois",
      abbreviation: "IL",
    },
    {
      name: "Indiana",
      abbreviation: "IN",
    },
    {
      name: "Iowa",
      abbreviation: "IA",
    },
    {
      name: "Kansas",
      abbreviation: "KS",
    },
    {
      name: "Kentucky",
      abbreviation: "KY",
    },
    {
      name: "Louisiana",
      abbreviation: "LA",
    },
    {
      name: "Maine",
      abbreviation: "ME",
    },
    {
      name: "Marshall Islands",
      abbreviation: "MH",
    },
    {
      name: "Maryland",
      abbreviation: "MD",
    },
    {
      name: "Massachusetts",
      abbreviation: "MA",
    },
    {
      name: "Michigan",
      abbreviation: "MI",
    },
    {
      name: "Minnesota",
      abbreviation: "MN",
    },
    {
      name: "Mississippi",
      abbreviation: "MS",
    },
    {
      name: "Missouri",
      abbreviation: "MO",
    },
    {
      name: "Montana",
      abbreviation: "MT",
    },
    {
      name: "Nebraska",
      abbreviation: "NE",
    },
    {
      name: "Nevada",
      abbreviation: "NV",
    },
    {
      name: "New Hampshire",
      abbreviation: "NH",
    },
    {
      name: "New Jersey",
      abbreviation: "NJ",
    },
    {
      name: "New Mexico",
      abbreviation: "NM",
    },
    {
      name: "New York",
      abbreviation: "NY",
    },
    {
      name: "North Carolina",
      abbreviation: "NC",
    },
    {
      name: "North Dakota",
      abbreviation: "ND",
    },
    {
      name: "Northern Mariana Islands",
      abbreviation: "MP",
    },
    {
      name: "Ohio",
      abbreviation: "OH",
    },
    {
      name: "Oklahoma",
      abbreviation: "OK",
    },
    {
      name: "Oregon",
      abbreviation: "OR",
    },
    {
      name: "Palau",
      abbreviation: "PW",
    },
    {
      name: "Pennsylvania",
      abbreviation: "PA",
    },
    {
      name: "Puerto Rico",
      abbreviation: "PR",
    },
    {
      name: "Rhode Island",
      abbreviation: "RI",
    },
    {
      name: "South Carolina",
      abbreviation: "SC",
    },
    {
      name: "South Dakota",
      abbreviation: "SD",
    },
    {
      name: "Tennessee",
      abbreviation: "TN",
    },
    {
      name: "Texas",
      abbreviation: "TX",
    },
    {
      name: "Utah",
      abbreviation: "UT",
    },
    {
      name: "Vermont",
      abbreviation: "VT",
    },
    {
      name: "Virgin Islands",
      abbreviation: "VI",
    },
    {
      name: "Virginia",
      abbreviation: "VA",
    },
    {
      name: "Washington",
      abbreviation: "WA",
    },
    {
      name: "West Virginia",
      abbreviation: "WV",
    },
    {
      name: "Wisconsin",
      abbreviation: "WI",
    },
    {
      name: "Wyoming",
      abbreviation: "WY",
    },
  ]

  const departments = [
    {
      name: "Sales",
    },
    {
      name: "Marketing",
    },
    {
      name: "Engineering",
    },
    {
      name: "Human Resources",
    },
    {
      name: "Legal",
    },
  ]

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: "AL",
    zipCode: null,
    department: "Sales",
  })

  const [errors, setErrors] = useState({})

  const [active, setActive] = useState(false)

  const { handleCreate } = useOnCreate()

  const handleModal = () => {
    setActive(!active)
  }

  const onCloseModal = () => {
    setActive(false)
    navigate("/employees")
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    handleCreate(data, (validationErrors) => {
      if (Object.keys(validationErrors).length === 0) {
        setErrors({})
        dispatch(addEmployee(data))
        handleModal()
      } else {
        setErrors(validationErrors)
      }
    })
  }

  return (
    <div className="create-employee-container">
      <h1>HRnet</h1>
      <a href="/employees">View Current Employees</a>
      <h2>Create Employee</h2>
      <form onSubmit={handleSubmit}>
        <Input
          data={data}
          setData={setData}
          name={"firstName"}
          label={"First Name"}
          value={data.firstName}
          error={errors.firstName}
        />
        <Input
          data={data}
          setData={setData}
          name={"lastName"}
          label={"Last Name"}
          value={data.lastName}
          error={errors.lastName}
        />
        <Input
          data={data}
          setData={setData}
          type={"calendar"}
          name={"dateOfBirth"}
          label={"Date of Birth"}
          value={data.dateOfBirth}
        />
        <Input
          data={data}
          setData={setData}
          type={"calendar"}
          name={"startDate"}
          label={"Start Date"}
          value={data.startDate}
        />
        <fieldset className="mb-2">
          <legend>Address</legend>
          <Input
            data={data}
            setData={setData}
            name={"street"}
            label={"Street"}
            value={data.street}
            error={errors.street}
          />
          <Input
            data={data}
            setData={setData}
            name={"city"}
            label={"City"}
            value={data.city}
            error={errors.city}
          />
          <Input
            type={"dropdown"}
            data={data}
            setData={setData}
            options={states}
            label={"State"}
            value={data.state}
            name={"state"}
            optionValue="abbreviation"
          />
          <Input
            type={"number"}
            data={data}
            setData={setData}
            name={"zipCode"}
            label={"Zip Code"}
            value={data.zipCode}
            error={errors.zipCode}
          />
        </fieldset>
        <Input
          type={"dropdown"}
          data={data}
          setData={setData}
          options={departments}
          label={"Department"}
          value={data.department}
          name={"department"}
          optionValue="name"
        />
        <div className="button-container">
          <Button label="Save" />
        </div>
      </form>
      <Modal
        show={active}
        onClose={onCloseModal}
        title={"Employee Created"}
        message={"The new employee has been added to the list"}
      />
    </div>
  )
}
