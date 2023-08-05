import { Container } from "../Container/Container";
import { SearchList } from "./SearchList/SearchList";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [filter, setFilter] = useState("");

  return (
    <>
      <header>
        <Container>
          <div>
            <Link to="/">Event planner</Link>
            <input
              name="search"
              type="text"
              autoComplete="off"
              placeholder="Search by keywords"
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>
        </Container>
      </header>
      {filter.length > 1 && <SearchList filter={filter} />}
    </>
  );
};
