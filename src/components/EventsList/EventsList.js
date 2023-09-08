import { useSelector } from "react-redux";
import { selectFilteredEvents } from "../../redux/events/selectors";
import { EventCard } from "../EventCard/EventCard";
import { EventListStyled } from "./EventList.styled";

export const EventsList = () => {
  const filteredEvents = useSelector(selectFilteredEvents);

  return (
    <EventListStyled>
      {filteredEvents &&
        filteredEvents.length > 0 &&
        filteredEvents.map((event) => (
          <li key={event.id}>
            <EventCard event={event} />
          </li>
        ))}
    </EventListStyled>
  );
};
