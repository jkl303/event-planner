import { useSelector } from "react-redux";
import {
  selectCategory,
  selectEvents,
  selectSort,
} from "../../redux/events/selectors";
import { EventCard } from "../EventCard/EventCard";

const priorities = { Low: 1, Medium: 2, High: 3 };

export const EventsList = () => {
  const events = useSelector(selectEvents);
  const category = useSelector(selectCategory);
  const sort = useSelector(selectSort);

  const filteredEvents = events
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

  return (
    <ul>
      {filteredEvents.length > 0 &&
        filteredEvents.map((event) => (
          <li key={event.id}>
            <EventCard event={event} />
          </li>
        ))}
    </ul>
  );
};
