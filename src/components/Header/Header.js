import { Container } from "../Container/Container";
import { SelectLanguageStyled } from "./SelectLanguage.styled";
import { HeaderStyled, HeaderWrapper, InputWrapper } from "./Header.styled";
import { SearchList } from "./SearchList/SearchList";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Search } from "../../images/svg/search.svg";

export const Header = () => {
  const [filter, setFilter] = useState("");

  const languages = [
    { value: "EN", label: "EN" },
    { value: "UA", label: "UA" },
  ];

  return (
    <>
      <HeaderStyled>
        <Container>
          <HeaderWrapper>
            <Link to="/">Event Planner</Link>
            <SelectLanguageStyled
              name="language"
              className="select"
              classNamePrefix="Select"
              defaultValue={languages[0]}
              isSearchable={false}
              options={languages}
            />
            <InputWrapper>
              <input
                name="search"
                type="text"
                autoComplete="off"
                placeholder="Search by keywords"
                onChange={(e) => setFilter(e.target.value)}
              />
              <Search />
            </InputWrapper>
          </HeaderWrapper>
        </Container>
      </HeaderStyled>
      {filter.length > 1 && <SearchList filter={filter} />}
    </>
  );
};
