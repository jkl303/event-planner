import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { components } from "react-select";
import { setCategory, setSort } from "../../redux/events/filterSlice";
import useWindowWidth from "../../hooks/useWindowWidth";
import { categoriesOptions } from "../../data/categories";
import { sortOptions } from "../../data/sort";
import { ReactComponent as FilterIcon } from "../../images/svg/filter.svg";
import { ReactComponent as SortIcon } from "../../images/svg/sort.svg";
import { FilterButton, SelectFilterStyled } from "./Filter.styled";

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <FilterIcon />
    </components.DropdownIndicator>
  );
};

export const Filter = () => {
  const dispatch = useDispatch();
  const width = useWindowWidth();
  const filter = useRef();
  const sort = useRef();

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  const changeCategory = ({ value }) => {
    dispatch(setCategory(value));
    width < 768 && setIsFilterOpen(false);
  };

  const changeSort = ({ value }) => {
    dispatch(setSort(value));
    width < 768 && setIsSortOpen(false);
  };

  useEffect(() => {
    dispatch(setCategory(""));
    dispatch(setSort(""));
  }, [dispatch]);

  useEffect(() => {
    document.addEventListener("mousedown", () => {
      setIsFilterOpen(false);
      setIsSortOpen(false);
    });

    return () => {
      document.removeEventListener("mousedown", () => {
        setIsFilterOpen(false);
        setIsSortOpen(false);
      });
    };
  });

  return (
    <>
      {width < 768 && (
        <>
          <FilterButton
            type="button"
            onClick={() => setIsFilterOpen((prevState) => !prevState)}
            ref={filter}
          >
            <FilterIcon />
          </FilterButton>
          <FilterButton
            type="button"
            onClick={() => setIsSortOpen((prevState) => !prevState)}
            ref={sort}
          >
            <SortIcon />
          </FilterButton>
        </>
      )}
      {(width > 320 || isFilterOpen) && (
        <SelectFilterStyled
          name="category"
          classNamePrefix="Select"
          components={{ DropdownIndicator }}
          options={categoriesOptions}
          isSearchable={false}
          defaultValue={{
            value: "Category",
            label: (
              <>
                {width < 768 && <FilterIcon />}
                Category
              </>
            ),
          }}
          onChange={changeCategory}
          defaultMenuIsOpen={width < 768}
        />
      )}
      {(width > 320 || isSortOpen) && (
        <SelectFilterStyled
          name="sort"
          classNamePrefix="Select"
          options={sortOptions}
          isSearchable={false}
          defaultValue={{
            value: "Input",
            label: (
              <>
                Sort by <SortIcon />
              </>
            ),
          }}
          onChange={changeSort}
          defaultMenuIsOpen={width < 768}
          $sort
        />
      )}
    </>
  );
};
