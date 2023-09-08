import { AddEventForm } from "../../components/AddEventForm/AddEventForm";
import { ContainerStyled } from "../../styles/Container.styled";

const EditEvent = () => {
  return (
    <section>
      <ContainerStyled>
        <h1>Edit event</h1>
        <AddEventForm edit />
      </ContainerStyled>
    </section>
  );
};

export default EditEvent;
