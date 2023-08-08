import { ErrorMessage, Field } from "formik";
import { ErrorMessageStyled } from "../ErrorMessage.styled";
import { useEffect, useRef, useState } from "react";
import {
  ButtonsWrapper,
  CalendarButton,
  CalendarFieldWrapper,
  CalendarStyled,
  CalendarWrapper,
} from "./Calendar.styled";
import { ReactComponent as Dropdown } from "../../../images/svg/dropdown.svg";
import { ButtonStyled } from "../../../styles/Button.styled";
import { ReactComponent as Cross } from "../../../images/svg/cross.svg";
import { InputStyled } from "../Input.styled";

export const TimeAndLocationFields = ({ setTime, setFieldValue }) => {
  const [date, setDate] = useState(new Date() || null);
  const [isShowCalendar, setIsShowCalendar] = useState(false);

  const wrapperRef = useRef();

  const addDate = () => {
    setFieldValue("date", date.toLocaleDateString("en-CA").slice(0, 10));
    setIsShowCalendar(false);
  };

  useEffect(() => {
    let handler = (e) => {
      if (!wrapperRef.current.contains(e.target)) {
        setIsShowCalendar(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <>
      <div>
        <label htmlFor="date">
          Select date
          <CalendarFieldWrapper ref={wrapperRef}>
            <CalendarButton
              type="button"
              onClick={() => setIsShowCalendar((prevState) => !prevState)}
              $isShowCalendar={isShowCalendar}
            >
              {isShowCalendar ? "Select Date" : "Input"}
              <Dropdown />
            </CalendarButton>
            {isShowCalendar && (
              <CalendarWrapper>
                <CalendarStyled
                  onChange={setDate}
                  name="date"
                  calendarType="gregory"
                  minDate={new Date()}
                  defaultValue={date}
                />
                <ButtonsWrapper>
                  <ButtonStyled
                    type="button"
                    onClick={() => setIsShowCalendar(false)}
                    $white
                  >
                    Cancel
                  </ButtonStyled>
                  <ButtonStyled type="button" onClick={addDate}>
                    Choose date
                  </ButtonStyled>
                </ButtonsWrapper>
              </CalendarWrapper>
            )}
          </CalendarFieldWrapper>
        </label>
        <ErrorMessage name="date" component={ErrorMessageStyled} />
      </div>

      <div>
        <InputStyled htmlFor="time">
          Select time
          <Field name="time" placeholder="Input" />
          <button
            type="button"
            onClick={() => {
              setFieldValue("time", "");
            }}
          >
            <Cross />
          </button>
        </InputStyled>
        <ErrorMessage name="time" component={ErrorMessageStyled} />
      </div>

      <div>
        <InputStyled htmlFor="location">
          Location
          <Field name="location" placeholder="Input" />
          <button
            type="button"
            onClick={() => {
              setFieldValue("location", "");
            }}
          >
            <Cross />
          </button>
        </InputStyled>
        <ErrorMessage name="location" component={ErrorMessageStyled} />
      </div>
    </>
  );
};
