import { styled } from "styled-components";
import { mediaQueries } from "./mediaQueries";

export const ButtonBigStyled = styled.button`
  margin-left: auto;
  margin-top: 40px;

  display: flex;
  width: 100%;
  padding: 16px 12px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border-radius: 8px;
  background-color: var(--primary);
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  border-radius: 8px;
  outline: none;
  border: none;

  font-size: 16px;
  font-weight: 500;
  color: #fff;

  transition: transform 250ms ease;

  ${mediaQueries("tablet")`width: 193px;`}

  &:hover,
  &:focus {
    cursor: pointer;
    transform: scale(1.07);
  }
`;
