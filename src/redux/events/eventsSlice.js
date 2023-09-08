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
        return {
          payload: {
            id: nanoid(),
            ...event,
          },
        };
      },
    },
    editEvent(state, action) {
      const index = state.findIndex((event) => event.id === action.payload.id);
      const picture = action.payload.picture || state[index].picture || "";
      state[index] = { ...action.payload, picture };
    },
    deleteEvent(state, action) {
      const index = state.findIndex((event) => event.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addEvent, editEvent, deleteEvent } = eventsSlice.actions;
export const eventsReducer = eventsSlice.reducer;
