import React from "react"
import { InputText } from "primereact/inputtext"
import { Calendar } from "primereact/calendar"
import { Dropdown } from "primereact/dropdown"
import useOnChange from "../hooks/useOnChange"

export default function Input({
  type,
  name,
  label,
  value,
  data,
  setData,
  options,
}) {
  const { onChangeHandler } = useOnChange({
    data,
    setData,
  })

  const parseDateFromString = (dateStr) => {
    if (!dateStr) return null
    const [day, month, year] = dateStr.split("/").map(Number)
    return new Date(`20${year}`, month - 1, day) // Convertir en format Date (avec l'année correcte)
  }

  switch (type) {
    case "calendar":
      return (
        <div className="flex flex-column gap-2">
          <label htmlFor={name}>{label}</label>
          <Calendar
            value={parseDateFromString(value)}
            onChange={onChangeHandler}
            dateFormat="mm/dd/yy"
            className="mb-2"
            name={name}
          />
        </div>
      )
    case "dropdown":
      return (
        <div className="flex flex-column gap-2">
          <label htmlFor={name}>{label}</label>
          <Dropdown
            value={value}
            options={options}
            optionLabel="name"
            optionValue="name"
            name={name}
            onChange={onChangeHandler}
            className="mb-2"
          />
        </div>
      )
    default:
      return (
        <div className="flex flex-column gap-2">
          <label htmlFor={name}>{label}</label>
          <InputText
            name={name}
            value={value}
            onChange={onChangeHandler}
            className="mb-2"
          />
        </div>
      )
  }
}
