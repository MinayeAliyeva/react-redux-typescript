import { createSlice, nanoid } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "courses",
  initialState: {
    data: [],
    searchTerm: "",
  },
  reducers: {
    addCourse(state, action) {
      state.data = [
        ...state.data,
        { name: action.payload.name, age: action.payload.age,id:nanoid() },
      ];
    },
  },
});

export const courseReducer = formSlice.reducer;
export const { addCourse } = formSlice.actions;
