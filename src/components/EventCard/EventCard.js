import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import {
  CategoryWrapper,
  ContentWrapper,
  DateWrapper,
  EventCardStyled,
  ImgWrapper,
  TextWrapper,
} from "./EventCard.styled";

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
    <EventCardStyled>
      <CategoryWrapper>
        <span>{category}</span>
        <span>{priority}</span>
      </CategoryWrapper>
      <ContentWrapper>
        <ImgWrapper>
          <DateWrapper>
            <p>{`${date} at ${time}`}</p>
            <p>{location}</p>
          </DateWrapper>
          <img
            src={picture || require("../../images/stub.png")}
            alt={title}
          ></img>
        </ImgWrapper>
        <TextWrapper>
          <h2>{title}</h2>
          <p>{description}</p>
        </TextWrapper>
        <Link to={`/details/${id}`} state={{ from: lcn }}>
          More info
        </Link>
      </ContentWrapper>
    </EventCardStyled>
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
