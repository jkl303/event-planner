import { Filter } from "../../components/Filter/Filter";
import { EventsList } from "../../components/EventsList/EventsList";
import { ContainerStyled } from "../../styles/Container.styled";
import useWindowWidth from "../../hooks/useWindowWidth";
import { CreateLinkStyled, FilterWrapper, TitleAndFilter } from "./Home.styled";
import { ReactComponent as PlusIcon } from "../../images/svg/plus.svg";

const Home = () => {
  const width = useWindowWidth();

  return (
    <section>
      <ContainerStyled>
        <TitleAndFilter>
          {width > 1279 && <h1>My events</h1>}
          <FilterWrapper>
            <Filter />
            <CreateLinkStyled to="/create">
              <PlusIcon />
              {width > 320 && "Add new event"}
            </CreateLinkStyled>
          </FilterWrapper>
          {width > 767 && width < 1280 && <h1>My events</h1>}
        </TitleAndFilter>
        <EventsList />
      </ContainerStyled>
    </section>
  );
};

export default Home;
