import { ErrorMessage, Field } from "formik";
import Calendar from "react-calendar";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import { ErrorMessageStyled } from "../ErrorMessage.styled";

export const TimeAndLocationFields = ({ setDate, setTime, setFieldValue }) => {
  return (
    <div>
      <label htmlFor="date">
        Select date
        <Calendar onChange={setDate} name="date" />
        <ErrorMessage name="title" component={ErrorMessageStyled} />
      </label>

      <label htmlFor="time">
        Select time
        <TimePicker onChange={setTime} name="time" />
        <ErrorMessage name="time" component={ErrorMessageStyled} />
      </label>

      <label htmlFor="location">
        Location
        <Field name="location" />
        <button
          type="button"
          onClick={() => {
            setFieldValue("location", "");
          }}
        >
          x
        </button>
        <ErrorMessage name="location" component={ErrorMessageStyled} />
      </label>
    </div>
  );
};
