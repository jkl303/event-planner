import { styled } from "styled-components";

export const ImgFieldStyled = styled.label`
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: column;
  margin-bottom: 8px;
  justify-items: stretch;

  div {
    width: 100%;
    height: 56px;
    margin-top: 8px;
    padding: 16px;
    resize: none;
    border: none;
    border-radius: 8px;
    box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
    line-height: 1.5;
    color: var(--text);
    transition: color 250ms ease, outline 250ms ease;

    &:hover,
    &:focus {
      cursor: pointer;
      color: var(--primary);
      border: 1px solid var(--primary);
    }
  }

  input {
    width: 100%;
    height: 56px;
    bottom: 0px;
    opacity: 0;
    position: absolute;
    &:hover {
      cursor: pointer;
    }
  }

  button {
    position: absolute;
    right: 0;
    bottom: 6px;
    border: none;
    background-color: transparent;

    &:hover {
      cursor: pointer;
    }
  }
`;
