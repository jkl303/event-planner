import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./events/filterSlice";
import { eventsReducer } from "./events/eventsSlice";

export const store = configureStore({
  reducer: {
    events: eventsReducer,
    filter: filterReducer,
  },
});
