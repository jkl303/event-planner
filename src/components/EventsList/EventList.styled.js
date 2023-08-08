import { styled } from "styled-components";
import { mediaQueries } from "../../styles/mediaQueries";

export const EventListStyled = styled.ul`
  display: grid;
  ${mediaQueries("tablet")`grid-template-columns: 332px 332px;`}
  ${mediaQueries("desktop")`grid-template-columns: 302px 302px 302px 302px;`}
  grid-gap: 24px;
`;
