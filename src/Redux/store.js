import { configureStore } from "@reduxjs/toolkit"
import selectedSectionReducer from "./main"
import routineReducer from "./routine"

const store = configureStore({
  reducer: {
    selectedSection: selectedSectionReducer,
    routine: routineReducer,
  },
})

export default store
