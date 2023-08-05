import { Link } from "react-router-dom";
import { Filter } from "../../components/Filter/Filter";
import { EventsList } from "../../components/EventsList/EventsList";
import { Container } from "../../components/Container/Container";
const Home = () => {
  return (
    <section>
      <Container>
        <div>
          <h1>My events</h1>
          <Filter />
          <Link to="/create">Add new event</Link>
        </div>
        <EventsList />
      </Container>
    </section>
  );
};

export default Home;
