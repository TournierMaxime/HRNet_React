// employeeSlice.js
import { createSlice } from "@reduxjs/toolkit"

// Initial state des employés
const initialState = {
  employees: [],
}

// Slice Redux pour les employés
const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employees.push(action.payload) // Ajouter un employé
    },
  },
})

// Exporter les actions
export const { addEmployee } = employeeSlice.actions

// Exporter le reducer pour le store
export default employeeSlice.reducer
