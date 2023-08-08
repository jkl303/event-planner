import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { Container } from "../../components/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { selectEvents } from "../../redux/events/selectors";
import { deleteEvent } from "../../redux/events/eventsSlice";
import {
  CategoryWrapper,
  ContentWrapper,
  DateWrapper,
  EventDetailsStyled,
  ImgWrapper,
  TextWrapper,
} from "./EventDetails.styled";
import { ButtonBigStyled } from "../../styles/ButtonBig.styled";

const EventDetails = () => {
  const { id } = useParams();
  const lcn = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const backLinkHref = lcn.state?.from ?? "/";

  const events = useSelector(selectEvents);
  const {
    title,
    description,
    date,
    time,
    location,
    category,
    picture,
    priority,
  } = events.find((event) => event.id === id);

  const deleteCurrent = () => {
    dispatch(deleteEvent(id));
    navigate("/");
  };

  return (
    <section>
      <Container>
        <Link to={backLinkHref}>Back</Link>
        <EventDetailsStyled>
          <CategoryWrapper>
            <span>{category}</span>
            <span>{priority}</span>
          </CategoryWrapper>
          <div>
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
            <ButtonBigStyled type="button" onClick={deleteCurrent}>
              Delete event
            </ButtonBigStyled>
          </div>
        </EventDetailsStyled>
      </Container>
    </section>
  );
};

export default EventDetails;
