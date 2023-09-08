import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectEvents } from "../../../redux/events/selectors";
import { ContainerStyled } from "../../../styles/Container.styled";
import {
  SearchListLinkStyled,
  SearchListStyled,
  SearchListWrapper,
} from "./SearchList.styled";

export const SearchList = ({ filter }) => {
  const lcn = useLocation();
  const events = useSelector(selectEvents);

  const filteredEvents = events.filter(
    ({ title, description, location, category: eventCategory }) =>
      title.toLowerCase().includes(filter) ||
      description.toLowerCase().includes(filter) ||
      location.toLowerCase().includes(filter) ||
      eventCategory.toLowerCase() === filter
  );

  return (
    <SearchListWrapper>
      <ContainerStyled>
        <SearchListStyled>
          {filteredEvents.map(({ id, title, date, time }) => (
            <li key={id}>
              <SearchListLinkStyled to={`/details/${id}`} state={{ from: lcn }}>
                {title}
                <p>{`${date.slice(5).replace("-", ".")} at ${time}`}</p>
              </SearchListLinkStyled>
            </li>
          ))}
        </SearchListStyled>
      </ContainerStyled>
    </SearchListWrapper>
  );
};

SearchList.propTypes = {
  filter: PropTypes.string.isRequired,
};
