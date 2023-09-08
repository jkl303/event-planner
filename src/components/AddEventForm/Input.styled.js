import { styled } from "styled-components";

export const InputStyled = styled.label`
  input {
    width: 100%;
    padding: 16px 36px 16px 12px;
    border: none;
    border-radius: 8px;
    box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

    line-height: 1.5;

    &::placeholder {
      color: var(--text);
    }

    &:hover,
    &:focus {
      outline: 1px solid var(--primary);
    }
  }

  textarea {
    width: 100%;
    height: 156px;
    padding: 16px 36px 16px 12px;
    resize: none;
    border: none;
    border-radius: 8px;
    box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

    line-height: 1.5;

    &::placeholder {
      color: var(--text);
    }

    &:hover,
    &:focus {
      outline: 1px solid var(--primary);
    }
  }

  button {
    position: absolute;
    top: 24px;
    right: 0;
    padding: 16px 12px;
    border: none;
    color: var(--primary);
    background-color: transparent;

    svg {
      display: block;
    }

    &:hover {
      cursor: pointer;
    }
  }
`;
