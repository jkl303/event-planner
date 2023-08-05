import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

export const EventCard = ({ event }) => {
  const lcn = useLocation();

  const {
    id,
    title,
    description,
    date,
    time,
    location,
    category,
    picture,
    priority,
  } = event;

  return (
    <div>
      <div>
        <img
          src={picture || require("../../images/stub.png")}
          alt={title}
          width={100}
        ></img>
        <div>
          <span>{category}</span>
          <span>{priority}</span>
        </div>
        <div>
          <p>{`${date} at ${time}`}</p>
          <p>{location}</p>
        </div>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <Link to={`/details/${id}`} state={{ from: lcn }}>
          More info
        </Link>
      </div>
    </div>
  );
};

EventCard.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
  }),
};
