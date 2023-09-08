import { styled } from "styled-components";
import { mediaQueries } from "../../styles/mediaQueries";

export const EventListStyled = styled.ul`
  display: grid;
  grid-gap: 24px;
  ${mediaQueries("tablet")`
  padding-top: 24px; 
  grid-template-columns: 332px 332px;`}
  ${mediaQueries("desktop")`
  padding: 0;
  grid-template-columns: 302px 302px 302px 302px;`}
`;
