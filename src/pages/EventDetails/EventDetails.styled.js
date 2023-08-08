import { styled } from "styled-components";
import { mediaQueries } from "../../styles/mediaQueries";

export const EventDetailsStyled = styled.div`
  margin-left: auto;
  margin-right: auto;
  position: relative;
  padding-bottom: 16px;
  border-radius: 12px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  ${mediaQueries("tablet")`width: 432px;`}
  ${mediaQueries("desktop")`width: 602px;`}

    button {
    width: 193px;
    margin-right: 20px;
  }
`;

export const ImgWrapper = styled.div`
  position: relative;
  img {
    width: 100%;
    object-fit: cover;
    height: 336px;
  }
`;

export const CategoryWrapper = styled.div`
  position: absolute;
  z-index: 1;
  top: 12px;
  left: 12px;

  span {
    display: inline-block;
    padding: 8px 12px;
    border-radius: 8px;
    background-color: #fff;

    color: var(--primary);
    font-size: 14px;
    font-weight: 500;
    line-height: 1.42;

    &:first-child {
      margin-right: 12px;
    }
  }
`;

export const DateWrapper = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  justify-content: space-between;
  bottom: 0;
  padding: 8px 16px;
  background-color: rgba(255, 255, 255, 0.8);

  p {
    color: var(--primary);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.71;
  }
`;

export const TextWrapper = styled.div`
  padding: 16px 16px 24px 16px;

  h2 {
    margin-bottom: 16px;
    color: var(--title);
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
  }

  p {
    height: 72px;
    color: var(#49454f);
    font-size: 14px;
    line-height: 1.42;
  }
`;
