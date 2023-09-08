import Select from "react-select";
import { styled } from "styled-components";

export const SelectTimeStyled = styled(Select)`
  .Select__control {
    display: none;
  }

  .Select__menu {
    position: static;
    margin: 0;
    border: none;
    box-shadow: none;

    font-size: 14px;
    line-height: 1.5;
    color: var(--disabled);

    &-list {
      height: 160px;
      padding: 0;

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }

  .Select__option {
    height: 48px;
    padding: 12px;
    transition: color 250ms ease-in-out;
    color: var(--disabled);

    :not(:last-child) {
      margin-bottom: 8px;
    }

    &:hover {
      cursor: pointer;
      color: var(--text);
    }

    &:active {
      background-color: var(--primary);
    }

    &--is-focused {
      background-color: transparent;
    }

    &--is-selected {
      color: var(--text);
      background-color: transparent;
    }
  }
`;
