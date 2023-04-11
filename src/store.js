import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    // mission: missionsReducer,
    // rocket: rocketsReducer,
  },
});

export default store