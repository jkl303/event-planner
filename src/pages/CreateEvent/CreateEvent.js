import { AddEventForm } from "../../components/AddEventForm/AddEventForm";
import { Container } from "../../components/Container/Container";

const CreateEvent = () => {
  return (
    <section>
      <Container>
        <h1>Create new event</h1>
        <AddEventForm />
      </Container>
    </section>
  );
};

export default CreateEvent;
