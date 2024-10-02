import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  employees: [],
}

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employees.push(action.payload)
    },
  },
})

export const { addEmployee } = employeeSlice.actions

export default employeeSlice.reducer
