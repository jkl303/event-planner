import { AddEventForm } from "../../components/AddEventForm/AddEventForm";
import { ContainerStyled } from "../../styles/Container.styled";

const CreateEvent = () => {
  return (
    <section>
      <ContainerStyled>
        <h1>Create new event</h1>
        <AddEventForm />
      </ContainerStyled>
    </section>
  );
};

export default CreateEvent;
