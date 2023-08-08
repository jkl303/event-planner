import { styled } from "styled-components";

export const InputStyled = styled.label`
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: column;
  margin-bottom: 8px;
  justify-items: stretch;

  input {
    width: 100%;
    padding: 16px;
    border: none;
    border-radius: 8px;
    box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
    line-height: 1.5;

    &:hover,
    &:focus {
      outline: 1px solid var(--primary);
    }
  }

  textarea {
    width: 100%;
    height: 156px;
    padding: 12px;
    resize: none;
    border: none;
    border-radius: 8px;
    box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
    line-height: 1.5;

    &:hover,
    &:focus {
      outline: 1px solid var(--primary);
    }
  }

  button {
    position: absolute;
    right: 0;
    bottom: ${(props) => (props.$description ? "114px" : "6px")};
    border: none;
    background-color: transparent;

    &:hover {
      cursor: pointer;
    }
  }
`;
