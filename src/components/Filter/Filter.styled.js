import { styled } from "styled-components";
import Select from "react-select";
import { mediaQueries } from "../../styles/mediaQueries";

export const FilterButton = styled.button`
  display: flex;
  width: 56px;
  height: 56px;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 8px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  color: var(--text);
  background-color: #fff;
`;

export const SelectFilterStyled = styled(Select)`
  width: ${(props) => (props.$sort ? "170px" : "156px")};

  font-size: 16px;
  font-weight: 500;
  color: var(--text);

  .Select__control {
    ${(props) =>
      props.$sort
        ? "padding: 16px 24px;"
        : "padding: 16px 21px;@media screen and (min-width: 1280px) {padding: 16px;}"}
    border: none;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    transition-duration: 100ms;
    color: var(--primary);
    ${mediaQueries("tablet")`color: var(--text);`}

    &:hover {
      cursor: pointer;
      color: var(--primary);
    }

    &--is-focused {
      box-shadow: none;
      color: var(--primary);
    }
  }

  .Select__value-container {
    padding: 0;
  }

  .Select__single-value {
    display: flex;
    margin: 0;
    padding-right: 12px;
    ${(props) =>
      props.$sort && "justify-content: space-between;padding-right: 0;"}
    align-items: center;
    color: inherit;

    svg {
      ${(props) => !props.$sort && "margin-right: 4px"};
    }
  }

  .Select__menu {
    margin: 0;
    z-index: 2;
    border: none;
    border-top: 1px solid var(--disabled);
    border-radius: 0;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    box-shadow: none;

    font-size: 14px;
    line-height: 1.5;

    &-list {
      padding: 0;
    }

    :not(:last-child) {
      margin-bottom: 4px;
      border-bottom: 1px solid var(--disabled);
    }
  }

  .Select__option {
    display: flex;
    padding: 8px 24px;
    justify-content: space-between;
    transition: color 250ms ease-in-out;
    color: var(--disabled);

    &:hover {
      cursor: pointer;
      color: var(--primary);
    }
    &--is-focused {
      background-color: transparent;
    }
    &--is-selected {
      color: var(--primary);
      background-color: transparent;
    }
  }

  .Select__indicator-separator {
    display: none;
  }

  .Select__dropdown-indicator {
    display: none;
    padding: 0;
    color: inherit;
    transition: inherit;
    ${(props) =>
      !props.$sort && "@media screen and (min-width: 768px) {display: flex;}"}

    &:hover {
      color: inherit;
    }
  }
`;
