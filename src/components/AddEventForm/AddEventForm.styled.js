import { Form } from "formik";
import { styled } from "styled-components";
import { mediaQueries } from "../../styles/mediaQueries";

export const AddEventFormStyled = styled(Form)`
  padding: 40px 16px;
  border-radius: 8px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  background-color: #fff;
  ${mediaQueries("tablet")`padding: 40px 24px;`}
  ${mediaQueries("desktop")`padding: 40px;`}

  label {
    p {
      font-size: 16px;
      line-height: 1;
      letter-spacing: 0.4px;
      color: var(--primary);
    }

    input,
    textarea {
      margin-top: 8px;
    }
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 20px 24px;
  ${mediaQueries("tablet")`max-height: 480px;`}
  ${mediaQueries("desktop")`max-height: 280px;
  column-gap: 42px;`}

  >div {
    position: relative;
    width: 100%;
    max-height: 180px;
    ${mediaQueries("tablet")`width: 308px;`}
    ${mediaQueries("desktop")`width: 372px;`}
  }
`;

export const AddButton = styled.button`
  display: flex;
  width: 100%;
  margin-top: 40px;
  margin-left: auto;
  padding: 16px 12px;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 8px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  background-color: var(--primary);
  transition: transform 250ms ease;

  font-weight: 500;
  color: #fff;

  ${mediaQueries("tablet")`width: 193px;`}

  &:hover,
  &:focus {
    cursor: pointer;
    transform: scale(1.05);
  }
`;
