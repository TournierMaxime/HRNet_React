import { configureStore } from "@reduxjs/toolkit"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import employeeReducer from "./employeeSlice.js"

// Configuration de la persistance pour le réducteur des employés
const persistConfig = {
  key: "employee", // Spécifiez une clé pour éviter la collision avec d'autres parties du store
  storage,
}

const persistedEmployeeReducer = persistReducer(persistConfig, employeeReducer)

export const store = configureStore({
  reducer: {
    employee: persistedEmployeeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store)
