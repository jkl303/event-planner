import { createSlice, nanoid } from "@reduxjs/toolkit";
import { initialEvents } from "../../data/initialEvents";

const localEvents = JSON.parse(localStorage.getItem("events"));

const eventsSlice = createSlice({
  name: "events",
  initialState:
    localEvents && localEvents.length > 0 ? localEvents : initialEvents,
  reducers: {
    addEvent: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(event) {
        const {
          title,
          description,
          date,
          time,
          location,
          category,
          picture,
          priority,
        } = event;

        return {
          payload: {
            id: nanoid(),
            title,
            description,
            date,
            time,
            location,
            category,
            picture,
            priority,
          },
        };
      },
    },
    deleteEvent(state, action) {
      const index = state.findIndex((event) => event.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addEvent, deleteEvent } = eventsSlice.actions;
export const eventssReducer = eventsSlice.reducer;
