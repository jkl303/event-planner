import { styled } from "styled-components";
import { mediaQueries } from "../../styles/mediaQueries";

export const EventCardStyled = styled.div`
  position: relative;
  overflow: hidden;
  height: 480px;
  padding-bottom: 16px;
  border-radius: 12px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  background-color: #fff;
`;

export const ContentWrapper = styled.div`
  transition: transform 300ms ease-in-out;

  &:hover,
  &:focus {
    transform: translateY(-60px);
  }

  a {
    display: block;
    width: 114px;
    margin-left: auto;
    margin-right: 16px;
    padding: 10px 24px;
    border-radius: 8px;
    background-color: var(--primary);
    transition: transform 250ms ease-in-out;

    font-size: 14px;
    font-weight: 500;
    line-height: 1.42;
    color: #fff;

    &:hover,
    &:focus {
      transform: translateY(-5px);
    }
  }
`;

export const ImgWrapper = styled.div`
  position: relative;

  img {
    width: 100%;
    height: 336px;
    object-fit: cover;

    ${mediaQueries("tablet")`width: 332px;`}
    ${mediaQueries("desktop")`width: 302px;`}
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

    font-size: 14px;
    font-weight: 500;
    line-height: 1.42;

    &:first-child {
      margin-right: 12px;
      color: var(--primary);
    }
  }
`;

export const DateWrapper = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  bottom: 0;
  padding: 8px 16px;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.8);

  p {
    font-size: 14px;
    line-height: 1.71;
    color: var(--primary);
  }
`;

export const TextWrapper = styled.div`
  padding: 16px 16px 24px 16px;

  h2 {
    margin-bottom: 16px;

    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: var(--title);
  }

  p {
    height: 72px;

    font-size: 14px;
    line-height: 1.42;
    color: #49454f;
  }
`;
