import React from "react"
import { InputText } from "primereact/inputtext"
import { InputNumber } from "primereact/inputnumber"
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
  error,
  optionValue,
}) {
  const { onChangeHandler } = useOnChange({
    data,
    setData,
  })

  const parseDateFromString = (dateStr) => {
    if (!dateStr) return null
    const [year, month, day] = dateStr.split("-").map(Number)
    return new Date(year, month - 1, day)
  }

  switch (type) {
    case "calendar":
      return (
        <div className="input-container">
          <label htmlFor={name}>{label}</label>
          <Calendar
            value={parseDateFromString(value)}
            onChange={onChangeHandler}
            dateFormat="mm/dd/yy"
            className="margin-bottom"
            name={name}
          />
        </div>
      )
    case "dropdown":
      return (
        <div className="input-container">
          <label htmlFor={name}>{label}</label>
          <Dropdown
            value={value}
            options={options}
            optionLabel="name"
            optionValue={optionValue}
            name={name}
            onChange={onChangeHandler}
            className="margin-bottom"
          />
        </div>
      )
    case "number":
      return (
        <div className="input-container">
          <label htmlFor={name}>{label}</label>
          <InputNumber
            name={name}
            value={value}
            onValueChange={onChangeHandler}
            className="margin-bottom"
            required
            useGrouping={false}
          />
          {error && <small className="p-error">{error}</small>}
        </div>
      )
    default:
      return (
        <div className="input-container">
          <label htmlFor={name}>{label}</label>
          <InputText
            name={name}
            value={value}
            onChange={onChangeHandler}
            className="margin-bottom"
            required
          />
          {error && <small className="error-message">{error}</small>}
        </div>
      )
  }
}
