import { courseReducer } from "./slices/FormSlice";
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: {
    courses: courseReducer,
  },
});

