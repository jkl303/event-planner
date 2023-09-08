import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { mediaQueries } from "../../../styles/mediaQueries";

export const SearchListWrapper = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;
`;

export const SearchListStyled = styled.ul`
  padding: 24px 16px;
  border-radius: 12px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  background-color: #fff;
  ${mediaQueries("tablet")`width: 368px;
  margin-left: auto; 
  margin-right: 93px;`}
  ${mediaQueries("desktop")`width: 410px;`}

  :not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const SearchListLinkStyled = styled(Link)`
  display: flex;
  justify-content: space-between;
  transition: color 250ms ease;
  color: var(--text);

  &:hover {
    color: var(--primary);
  }

  :last-child {
    color: var(--primary);
  }
`;
