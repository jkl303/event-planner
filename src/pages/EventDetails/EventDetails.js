import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { Container } from "../../components/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { selectEvents } from "../../redux/events/selectors";
import { deleteEvent } from "../../redux/events/eventsSlice";

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
        <div>
          <h1>{title}</h1>
          <img
            src={picture || require("../../images/stubWide.png")}
            alt={title}
            width={100}
          ></img>
          <p>{description}</p>
          <div>
            <span>{category}</span>
            <span>{priority}</span>
            <span>{location}</span>
            <span>{`${date} at ${time}`}</span>
          </div>
          <div>
            <Link to={`/edit/${id}`}>Edit</Link>
            <button type="button" onClick={deleteCurrent}>
              Delete event
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default EventDetails;
