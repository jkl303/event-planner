import { createSelector } from "@reduxjs/toolkit";
import { priorities } from "../../data/priorities";

export const selectEvents = (state) => state.events;
export const selectCategory = (state) => state.filter.category;
export const selectSort = (state) => state.filter.sort;

export const selectEventById = createSelector(
  [selectEvents, (state, id) => id],
  (events, id) => {
    const event = events.filter((event) => event.id === id);
    return event[0];
  }
);

// (state) =>
// state.events.filter((event) => event.id === id);

export const selectFilteredEvents = createSelector(
  [selectEvents, selectCategory, selectSort],
  (events, category, sort) => {
    return events
      .filter((event) => event.category.includes(category))
      .sort((a, b) => {
        const dateA = new Date(a.date + " " + a.time);
        const dateB = new Date(b.date + " " + b.time);

        const priorityA = priorities[a.priority];
        const priorityB = priorities[b.priority];

        switch (sort) {
          case "Name to Z":
            return a.title.localeCompare(b.title);
          case "Name to A":
            return b.title.localeCompare(a.title);
          case "Date soon":
            return dateA - dateB;
          case "Date far":
            return dateB - dateA;
          case "Priority to low":
            return priorityB - priorityA;
          case "Priority to high":
            return priorityA - priorityB;
          default:
            return a - b;
        }
      });
  }
);
