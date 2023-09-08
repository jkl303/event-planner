import { styled } from "styled-components";
import { mediaQueries } from "../../styles/mediaQueries";
import { Link } from "react-router-dom";

export const BackLinkStyled = styled(Link)`
  display: flex;
  align-items: center;
  margin: 41.5px 0 25.5px;
  color: var(--primary);

  font-size: 14px;
  font-weight: 500;

  svg {
    margin-right: 8px;
  }
`;

export const EventDetailsStyled = styled.div`
  height: 464px;
  margin-top: 24px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  ${mediaQueries("tablet")`height: 504px;`}
  ${mediaQueries("desktop")`
  width: 628px;
  height: 492px;`}

  img {
    width: 100%;
    height: 168px;
    border-radius: 8px;
    object-fit: cover;
    ${mediaQueries("tablet")`height: 272px;`}
  }
`;

export const InfoWrapper = styled.div`
  padding: 24px 16px 40px;
  ${mediaQueries("tablet")`padding: 24px 24px 40px;`}
  ${mediaQueries("desktop")`padding: 20px 16px 40px;`}

  p {
    height: 60px;
    color: var(#49454f);
    font-size: 14px;
    line-height: 1.42;
    @media (min-width: 768px) and (max-width: 1279px) {
      height: 40px;
    }
  }
`;

export const AdditionalInfoWrapper = styled.div`
  display: flex;
  margin: 24px 0 40px;
  flex-wrap: wrap;
  gap: 12px;
  ${mediaQueries("desktop")`margin: 12px 0 24px;`}

  span {
    padding: 6px 12px;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 4px 5px 9px 0px rgba(166, 141, 174, 0.28);

    font-size: 14px;
    line-height: 1.42;

    &:not(:nth-child(2)) {
      color: var(--primary);
    }
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  margin-left: auto;
  justify-content: space-between;
  ${mediaQueries("tablet")`width: 179px;`}

  a {
    display: flex;
    width: 108px;
    height: 32px;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--primary);
    border-radius: 4px;

    color: var(--primary);
    font-size: 12px;
    font-weight: 500;
    line-height: 1.33;
    ${mediaQueries("tablet")`width: 55px;`}
  }
`;
