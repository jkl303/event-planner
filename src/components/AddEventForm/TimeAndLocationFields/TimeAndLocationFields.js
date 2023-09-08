import { useEffect, useRef, useState } from "react";
import { ErrorMessage, Field } from "formik";
import { TimeField } from "./TimeField/TimeField";
import { ReactComponent as Dropdown } from "../../../images/svg/dropdown.svg";
import { ReactComponent as Cross } from "../../../images/svg/cross.svg";
import { ErrorMessageStyled } from "../ErrorMessage.styled";
import { ButtonStyled } from "../../../styles/Button.styled";
import { InputStyled } from "../Input.styled";
import {
  ButtonsWrapper,
  CalendarButton,
  CalendarFieldWrapper,
  CalendarStyled,
  CalendarWrapper,
} from "./Calendar.styled";

export const TimeAndLocationFields = ({ setFieldValue, values }) => {
  const [date, setDate] = useState(values.date || new Date());
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
          <p>Select date</p>
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
        <label htmlFor="time">
          <p>Select time</p>
          <TimeField time={values.time} />
        </label>

        <ErrorMessage name="time" component={ErrorMessageStyled} />
      </div>

      <div>
        <InputStyled htmlFor="location">
          <p>Location</p>
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
