import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: { val: "", category: "", sort: "" },
  reducers: {
    setVal: {
      reducer(state, action) {
        state.val = action.payload;
      },
    },
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

export const { setVal, setCategory, setSort } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
