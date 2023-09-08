import { styled } from "styled-components";

export const ColoredPriorityStyled = styled.span`
  color: ${(props) => {
    return `var(--${props.$priority.toLowerCase()})`;
  }};
`;
