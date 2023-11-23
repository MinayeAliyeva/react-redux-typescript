import { createSlice } from "@reduxjs/toolkit";
const formSlice = createSlice({
    name:'courses',
  initialState: {
    data: [],
    searchTerm: "",
  },
  reducers:[

  ]
});

export const courseReducer=formSlice.reducer;