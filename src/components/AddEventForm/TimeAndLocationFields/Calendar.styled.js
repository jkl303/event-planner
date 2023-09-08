import Calendar from "react-calendar";
import { styled } from "styled-components";

export const CalendarFieldWrapper = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
`;

export const CalendarButton = styled.button`
  display: flex;
  width: 100%;
  height: 56px;
  margin-top: 8px;
  padding: 16px 12px 16px 12px;
  justify-content: space-between;
  border: none;
  border-radius: 8px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  background-color: var(--bg);
  transition: color 250ms ease-in-out;

  font-size: 16px;
  line-height: 1.5;
  color: var(--text);

  &:hover,
  &:focus {
    cursor: pointer;
    color: var(--primary);
  }

  svg {
    vertical-align: middle;
    transform: rotate(${(props) => (props.$isShowCalendar ? "-180deg" : "0")});
    transition: transform 250ms ease-in-out;
  }
`;

export const CalendarWrapper = styled.div`
  position: absolute;
  z-index: 1;
  top: 60px;
  padding: 20px;
  background-color: #fff;
  animation: toBottom 300ms linear;
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
    margin-bottom: 16px;
    justify-content: space-between;

    button {
      transition: color 250ms ease-in-out;

      &:hover {
        cursor: pointer;
        color: var(--primary);
      }
    }
    .react-calendar__navigation__label__labelText {
      font-size: 14px;
      font-weight: 500;
      line-height: 1.42;
      color: var(--text);
    }

    .react-calendar__navigation__prev2-button,
    .react-calendar__navigation__next2-button {
      display: none;
    }
  }

  .react-calendar__viewContainer {
    font-size: 12px;
    line-height: 1.33;

    abbr {
      text-decoration: none;
    }

    .react-calendar__month-view__days {
      display: flex;
      margin-top: 16px;
      gap: 4px 0;

      button {
        padding: 8px 0;
        transition: color 250ms ease, background-color 250ms ease;

        :not(:has(.react-calendar__month-view__days__day--neighboringMonth)) {
          &:hover,
          &:focus {
            background-color: var(--primary);

            abbr {
              color: #fff;
            }
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
