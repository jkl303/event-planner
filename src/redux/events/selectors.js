import { createSelector } from "@reduxjs/toolkit";

export const selectEvents = (state) => state.events;
const selectVal = (state) => state.filter.val;
const selectCategory = (state) => state.filter.category;
const selectSort = (state) => state.filter.sort;

export const selectFilteredEvents = createSelector(
  [selectEvents, selectVal, selectCategory, selectSort],
  (events, val, category, sort) => {
    return events
      .filter(
        ({ title, description, location, category: eventCategory }) =>
          (title.toLowerCase().includes(val) ||
            description.toLowerCase().includes(val) ||
            location.toLowerCase().includes(val) ||
            eventCategory.toLowerCase() === val) &&
          eventCategory.includes(category)
      )
      .sort((a, b) => {
        const dateA = new Date(a.date + " " + a.time);
        const dateB = new Date(b.date + " " + b.time);

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
            return b.priority - a.priority;
          case "Priority to high":
            return a.priority - b.priority;
          default:
            return a - b;
        }
      });
  }
);
