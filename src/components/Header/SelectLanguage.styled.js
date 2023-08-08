import styled from "styled-components";
import Select from "react-select";

export const SelectLanguageStyled = styled(Select)`
  display: block;
  width: 69px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  color: var(--text);

  .Select__control {
    padding: 14px 8px 14px 12px;
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
    border: none;
    padding: 8px 0;
    border-radius: 8px;
    box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

    font-size: 14px;
    line-height: 1.5;
    color: var(--disabled);

    &-list {
      padding: 8px 18px 8px 14px;
      :first-child {
        margin-bottom: 8px;
      }
    }
  }

  .Select__option {
    padding: 0;
    border-bottom: 1px solid var(--disabled);
    transition: color 250ms ease-in-out;

    :hover {
      cursor: pointer;
      color: var(--primary);
    }
    &--is-focused {
      background-color: var(--primary);
    }
    &--is-selected {
      color: var(--text);
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
