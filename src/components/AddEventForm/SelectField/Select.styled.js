import styled from "styled-components";
import Select from "react-select";

export const SelectStyled = styled(Select)`
  display: block;
  width: 100%;
  margin-top: 8px;
  border-radius: 8px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  font-size: 16px;
  font-style: normal;
  line-height: 1.5;
  color: var(--text);

  .Select__control {
    padding: 16px 12px;
    border: none;

    &:hover {
      cursor: pointer;

      .Select__single-value {
        color: var(--primary);
      }
    }

    &--is-focused {
      box-shadow: none;
    }
    &--menu-is-open {
      .Select__dropdown-indicator {
        transform: rotate(-180deg);
      }
    }
  }

  .Select__value-container {
    height: 24px;
    padding: 0;
  }

  .Select__single-value {
    transition: color 250ms ease;
  }

  .Select__menu {
    max-height: 168px;
    padding: 8px 0;
    border: none;
    border-radius: 8px;
    box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
    animation: toBottom 250ms linear;

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
    transition: color 250ms ease-in-out;

    color: var(--text);

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
    padding: 0;
    border: none;
    outline: none;
    transition: transform 250ms ease-in-out;
    color: var(--text);

    :hover {
      cursor: pointer;
      color: var(--primary);
    }
  }
`;
