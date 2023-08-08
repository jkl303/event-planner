import Calendar from "react-calendar";
import { styled } from "styled-components";

export const CalendarFieldWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

export const CalendarButton = styled.button`
  display: flex;
  justify-content: space-between;
  height: 56px;
  width: 100%;
  margin-top: 8px;
  padding: 16px 10px;
  border-radius: 8px;
  border: none;
  background-color: var(--bg);
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  color: var(--text);
  transition: color 250ms ease-in-out;

  &:hover,
  &:focus {
    cursor: pointer;
    color: var(--primary);
    outline: 1px solid var(--primary);
  }

  svg {
    vertical-align: middle;
    fill: var(--primary);
    transition: transform 250ms ease-in-out;
    transform: rotate(${(props) => (props.$isShowCalendar ? "-180deg" : "0")});
  }
`;

export const CalendarWrapper = styled.div`
  position: absolute;
  padding: 20px;

  top: 60px;

  z-index: 1;
  background: #fff;
`;

export const CalendarStyled = styled(Calendar)`
  margin-bottom: 16px;

  button {
    border: none;
    background: var(--bg);
    &:hover {
      cursor: pointer;
    }
  }

  .react-calendar__navigation {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;

    button {
      transition: color 250ms ease-in-out;

      &:hover {
        cursor: pointer;
        color: var(--primary);
      }
    }
    .react-calendar__navigation__label__labelText {
      color: var(--text);
      font-family: Poppins;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 1.42;
    }

    .react-calendar__navigation__prev2-button {
      display: none;
    }

    .react-calendar__navigation__next2-button {
      display: none;
    }
  }

  .react-calendar__viewContainer {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.33;

    abbr {
      text-decoration: none;
    }

    .react-calendar__month-view__days {
      margin-top: 16px;
      display: flex;
      gap: 4px 0;
      button {
        padding: 8px 0;
        transition: color 250ms ease, background-color 250ms ease;

        :not(:has(.react-calendar__month-view__days__day--neighboringMonth))
          &:hover,
        &:focus {
          background-color: var(--primary);
          abbr {
            color: #fff;
          }
        }
      }

      .react-calendar__month-view__days__day--neighboringMonth {
        abbr {
          color: #fff;
        }
      }
    }
  }

  .react-calendar__tile {
    color: var(--disabled);

    &--active {
      color: var(--primary);
    }
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
