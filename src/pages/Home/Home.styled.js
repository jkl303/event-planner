import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { mediaQueries } from "../../styles/mediaQueries";

export const TitleAndFilter = styled.div`
  ${mediaQueries("desktop")`display: flex;
  justify-content: space-between;
  align-items: center;`}
`;

export const FilterWrapper = styled.div`
  display: flex;
  padding: 40px 0;
  justify-content: flex-end;
  gap: 24px;
  ${mediaQueries("desktop")`padding: 60px 0 44px;`}

  > div {
    position: absolute;
    right: 83px;
    box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
    ${mediaQueries("tablet")`position: relative;
    right: 0;`}
  }
`;

export const CreateLinkStyled = styled(Link)`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  border-radius: 8px;
  color: white;
  background-color: var(--primary);
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  font-weight: 500;
  ${mediaQueries("tablet")`width: auto;
  svg {margin-right: 16px;}`}
`;
