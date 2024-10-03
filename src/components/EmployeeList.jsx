import React, { useState } from "react"
import { DataTable } from "primereact/datatable"
import { Column } from "primereact/column"
import { InputText } from "primereact/inputtext"
import { Dropdown } from "primereact/dropdown"
import { useSelector } from "react-redux"
import moment from "moment/moment"
import { FilterMatchMode } from "primereact/api"

export default function EmployeeList() {
  const employees = useSelector((state) => state?.employee?.employees)

  const [rows, setRows] = useState(10)
  const [first, setFirst] = useState(0)
  const [globalFilterValue, setGlobalFilterValue] = useState("")

  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    firstName: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    lastName: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    dateOfBirth: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    startDate: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    street: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    city: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    zipCode: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    state: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    department: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  })

  const rowsPerPageOptions = [
    { label: "10", value: 10 },
    { label: "25", value: 25 },
    { label: "50", value: 50 },
    { label: "100", value: 100 },
  ]

  const dateFormat = (date) => {
    const newDate = date.substr(0, 10)
    console.log("newDate", newDate)

    return moment(newDate).format("DD/MM/YY")
  }

  const onGlobalFilterChange = (e) => {
    const value = e.target.value
    let _filters = { ...filters }

    _filters.global.value = value

    setFilters(_filters)
    setGlobalFilterValue(value)
  }

  const renderHeader = () => {
    return (
      <div className="flex justify-content-between">
        <div>
          <span className="mr-2">Show</span>
          <Dropdown
            value={rows}
            options={rowsPerPageOptions}
            onChange={(e) => setRows(e.value)}
            placeholder="Rows per page"
            className="mr-2"
          />
          <span>entries</span>
        </div>
        <InputText
          placeholder="Keyword Search"
          icon="pi pi-search"
          value={globalFilterValue}
          onChange={onGlobalFilterChange}
        />
      </div>
    )
  }

  const paginatorLeftTemplate = (options) => {
    const { first, rows, totalRecords } = options // Get first, rows, totalRecords from options
    const last = Math.min(first + rows, totalRecords) // Calculate the last visible entry
    return (
      <span>
        Showing {first + 1} to {last} of {totalRecords} entries
      </span>
    ) // Display first+1 to make it 1-based instead of 0-based
  }

  const onPageChange = (event) => {
    setFirst(event.first)
    setRows(event.rows)
  }

  return (
    <div className="flex w-12">
      <div className="flex w-2"></div>
      <div className="flex flex-column align-items-center">
        <h2>Current Employees</h2>
        {employees?.length === 0 || employees === undefined ? (
          <p>No employees found</p>
        ) : (
          <div className="card">
            <DataTable
              value={employees}
              globalFilterFields={[
                "firstName",
                "lastName",
                "dateOfBirth",
                "startDate",
                "street",
                "city",
                "state",
                "zipCode",
                "department",
              ]}
              filters={filters}
              paginator
              paginatorLeft={paginatorLeftTemplate}
              paginatorRight={null}
              rows={rows}
              first={first}
              tableStyle={{ minWidth: "50rem" }}
              header={renderHeader}
              paginatorTemplate="PrevPageLink PageLinks NextPageLink CurrentPageReport RowsPerPageDropdown"
              currentPageReportTemplate=""
              onPage={onPageChange}
            >
              <Column field="firstName" header="First Name" sortable></Column>
              <Column field="lastName" header="Last Name" sortable></Column>
              <Column
                field="dateOfBirth"
                header="Date of Birth"
                sortable
                body={(rowData) => dateFormat(rowData.dateOfBirth)}
              ></Column>
              <Column
                field="startDate"
                header="Start Date"
                sortable
                body={(rowData) => dateFormat(rowData.startDate)}
              ></Column>
              <Column field="street" header="Street" sortable></Column>
              <Column field="city" header="City" sortable></Column>
              <Column field="state" header="State" sortable></Column>
              <Column field="zipCode" header="Zip Code" sortable></Column>
              <Column field="department" header="Department" sortable></Column>
            </DataTable>
          </div>
        )}
      </div>
      <div className="flex w-2"></div>
    </div>
  )
}
