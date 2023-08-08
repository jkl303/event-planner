import styled from "styled-components";
import Select from "react-select";

export const SelectStyled = styled(Select)`
  display: block;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  border-radius: 8px;
  margin-top: 8px;

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  color: var(--text);

  &:hover {
    outline: 1px solid var(--primary);
  }

  .Select__control {
    padding: 15px 8px 15px 12px;
    border-radius: 8px;
    border: none;

    &--is-focused {
      box-shadow: none;
    }
    &--menu-is-open {
      .Select__dropdown-indicator {
        color: var(--primary);
        transform: rotate(-180deg);
      }
    }
  }

  .Select__value-container {
    padding: 0;
  }

  .Select__menu {
    max-height: 168px;
    border: none;
    padding: 8px 0;
    border-radius: 8px;
    box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

    font-size: 14px;
    line-height: 1.5;
    color: var(--disabled);

    &-list {
      max-height: 154px;
      padding: 0 16px;
    }

    :not(:last-child) {
      border-bottom: 1px solid var(--disabled);
    }
  }

  .Select__option {
    padding: 16px 0;

    color: var(--text);
    transition: color 250ms ease-in-out;

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
    border: none;
    outline: none;
    padding: 0;
    color: var(--text);
    transition: color 250ms ease-in-out, transform 250ms ease-in-out;

    :hover {
      cursor: pointer;
      color: var(--primary);
    }
  }
`;
