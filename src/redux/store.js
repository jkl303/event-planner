import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./events/filterSlice";
import { eventssReducer } from "./events/eventsSlice";

export const store = configureStore({
  reducer: {
    events: eventssReducer,
    filter: filterReducer,
  },
});
