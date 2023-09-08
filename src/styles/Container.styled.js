import { styled } from "styled-components";
import { mediaQueries } from "./mediaQueries";

export const ContainerStyled = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-left: 24px;
  padding-right: 24px;
  max-width: 320px;

  ${mediaQueries("tablet")`max-width: 768px;
    padding-left: 40px;
    padding-right: 40px;`}

  ${mediaQueries("desktop")`max-width: 1280px;
  padding: 0;`}
`;
