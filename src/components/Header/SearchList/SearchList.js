import PropTypes from "prop-types";
import { Container } from "../../Container/Container";
import { useSelector } from "react-redux";
import { selectEvents } from "../../../redux/events/selectors";

export const SearchList = ({ filter }) => {
  const events = useSelector(selectEvents);

  const filteredEvents = events.filter(
    ({ title, description, location, category: eventCategory }) =>
      title.toLowerCase().includes(filter) ||
      description.toLowerCase().includes(filter) ||
      location.toLowerCase().includes(filter) ||
      eventCategory.toLowerCase() === filter
  );

  return (
    <div>
      <Container>
        <ul>
          {filteredEvents.map(({ id, title }) => (
            <li key={id}>
              <p>{title}</p>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

SearchList.propTypes = {
  filter: PropTypes.string.isRequired,
};
