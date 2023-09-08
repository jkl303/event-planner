import { styled } from "styled-components";

export const ImgFieldStyled = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-items: stretch;

  div {
    width: 100%;
    height: 56px;
    margin-top: 8px;
    padding: 16px 12px;
    border: none;
    border-radius: 8px;
    box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

    line-height: 1.5;
    color: var(--text);

    span {
      transition: color 250ms ease;
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

      + div {
        span {
          color: var(--primary);
        }
      }
    }
  }

  button {
    position: absolute;
    right: 0;
    bottom: 0;
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
