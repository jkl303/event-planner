import { Form } from "formik";
import { styled } from "styled-components";
import { mediaQueries } from "../../styles/mediaQueries";

export const AddEventFormStyled = styled(Form)`
  padding: 40px 16px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  ${mediaQueries("tablet")`padding: 40px 26px;`}

  label {
    color: var(--primary);
    font-size: 16px;
    line-height: 1;
    letter-spacing: 0.4px;
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
  justify-content: space-between;

  ${mediaQueries("tablet")`max-height: 608px;`}
  ${mediaQueries("desktop")`max-height: 388px;`}

  > div {
    ${mediaQueries("tablet")`max-height: 308px;`}
    ${mediaQueries("desktop")`max-width: 372px;`}
  }
`;
