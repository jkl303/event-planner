import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectEvents } from "../../redux/events/selectors";
import { deleteEvent } from "../../redux/events/eventsSlice";
import {
  AdditionalInfoWrapper,
  BackLinkStyled,
  ButtonsWrapper,
  EventDetailsStyled,
  InfoWrapper,
} from "./EventDetails.styled";
import { ContainerStyled } from "../../styles/Container.styled";
import { ReactComponent as ArrowLeft } from "../../images/svg/arrowLeft.svg";
import { ColoredPriorityStyled } from "../../styles/ColoredPriority.styled";
import { ButtonStyled } from "../../styles/Button.styled";

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
      <ContainerStyled>
        <BackLinkStyled to={backLinkHref}>
          <ArrowLeft />
          Back
        </BackLinkStyled>
        <h1>{title}</h1>
        <EventDetailsStyled>
          <img
            src={picture || require("../../images/stub.png")}
            alt={title}
          ></img>
          <InfoWrapper>
            <p>{description}</p>
            <AdditionalInfoWrapper>
              <span>{category}</span>
              <ColoredPriorityStyled $priority={priority}>
                {priority}
              </ColoredPriorityStyled>
              <span>{location}</span>
              <span>{`${date.slice(5).replace("-", ".")} at ${time}`}</span>
            </AdditionalInfoWrapper>
            <ButtonsWrapper>
              <Link to={`/edit/${id}`}>Edit</Link>
              <ButtonStyled type="button" onClick={deleteCurrent}>
                Delete event
              </ButtonStyled>
            </ButtonsWrapper>
          </InfoWrapper>
        </EventDetailsStyled>
      </ContainerStyled>
    </section>
  );
};

export default EventDetails;
