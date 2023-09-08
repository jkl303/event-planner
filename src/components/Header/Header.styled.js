import { styled } from "styled-components";
import { mediaQueries } from "../../styles/mediaQueries";

export const HeaderStyled = styled.header`
  padding-top: 32px;
  border-bottom: 1px solid #7b61ff;
  background-color: #fefcff;
  ${mediaQueries("tablet")`margin: padding-top: 26px;`}
  ${mediaQueries("desktop")`margin: padding-top: 22px;`}
`;

export const HeaderWrapper = styled.div`
  display: grid;
  padding-bottom: 24px;
  align-items: start;
  grid-template-areas:
    "link select"
    "input input";
  grid-gap: 24px 0;
  ${mediaQueries("tablet")`
  grid-template-areas:
    "link input select";
    padding-bottom: 18px;
    grid-template-columns: 1fr 3fr 69px;`}
  ${mediaQueries("desktop")`margin: padding-bottom: 22px;`}

  a {
    grid-area: link;

    font-size: 24px;
    font-family: Alata, sans-serif;
    color: var(--primary);
  }

  .select {
    grid-area: select;
    justify-self: end;
  }
`;

export const InputWrapper = styled.div`
  grid-area: input;
  position: relative;
  ${mediaQueries("tablet")`justify-self: end;
  margin-right: 24px;`}

  svg {
    position: absolute;
    left: 12px;
    top: 12px;
    fill: var(--primary);
  }

  input {
    width: 100%;
    padding: 12px 12px 12px 48px;
    border: none;
    border-radius: 8px;
    box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

    line-height: 1.5;
    ${mediaQueries("tablet")`width: 368px;`}
    ${mediaQueries("desktop")`width: 410px;`}

    &:hover,
    &:focus {
      outline: 1px solid var(--primary);

      svg {
        transform: scale(1.5);
      }
    }
  }
`;
