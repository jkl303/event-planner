import { styled } from "styled-components";

export const TimeFieldWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const TimeButton = styled.button`
  display: flex;
  width: 100%;
  margin-top: 8px;
  padding: 16px 12px;
  justify-content: space-between;
  border: none;
  border-radius: 8px;
  background-color: var(--bg);
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  transition: color 250ms ease;

  font-size: 16px;
  line-height: 1.5;
  color: var(--text);

  &:hover,
  &:focus {
    cursor: pointer;
    color: var(--primary);
  }

  svg {
    transition: transform 250ms ease-in-out;
    ${(props) => props.$isShowTimeField && "transform: rotate(-180deg);"}
  }
`;

export const TimeMenuStyled = styled.div`
  position: absolute;
  display: flex;
  z-index: 1;
  width: 100%;
  margin-top: 8px;
  padding: 0 16px;
  align-items: center;
  gap: 12px;
  border-radius: 8px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  animation: toBottom 250ms linear;
  background-color: #fff;

  > span {
    content: ":";
    width: 8px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text);
  }
`;
