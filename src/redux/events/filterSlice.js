import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: { category: "", sort: "" },
  reducers: {
    setCategory: {
      reducer(state, action) {
        state.category = action.payload;
      },
    },
    setSort: {
      reducer(state, action) {
        state.sort = action.payload;
      },
    },
  },
});

export const { setCategory, setSort } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
