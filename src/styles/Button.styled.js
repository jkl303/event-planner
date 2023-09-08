import { styled } from "styled-components";

export const ButtonStyled = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  border: ${(props) => (props.$white ? "1px solid var(--primary)" : "none")};
  outline: none;
  background-color: ${(props) =>
    props.$white ? "var(--bg)" : "var(--primary)"};

  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  color: ${(props) => (props.$white ? "var(--primary)" : "#fff")};

  transition: transform 250ms ease;

  &:hover,
  &:focus {
    cursor: pointer;
    transform: scale(1.05);
  }
`;
