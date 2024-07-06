import { configureStore } from "@reduxjs/toolkit";
import selectedSectionReducer from "./main";
import communityReducer from "./communitySlice";

const store = configureStore({
  reducer: {
    selectedSection: selectedSectionReducer,
    community: communityReducer,
  },
});

export default store;
