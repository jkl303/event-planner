import { useState, useRef, useEffect } from "react";
import { Field } from "formik";
import { makeTimeOptions } from "./makeTimeOptions";
import { SelectTime } from "./SelectTime/SelectTime";
import { ReactComponent as DropdownIcon } from "../../../../images/svg/dropdown.svg";
import {
  TimeButton,
  TimeFieldWrapper,
  TimeMenuStyled,
} from "./TimeField.styled";

export const TimeField = ({ time }) => {
  const ref = useRef();
  const [isShowTimeField, setIsShowTimeField] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsShowTimeField(false);
      }
    };

    document.addEventListener("click", checkIfClickedOutside);

    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  });

  return (
    <TimeFieldWrapper ref={ref}>
      <TimeButton
        type="button"
        onClick={() => setIsShowTimeField((prevState) => !prevState)}
        $isShowTimeField={isShowTimeField}
      >
        {isShowTimeField ? "Select time" : "Input"}
        <DropdownIcon />
      </TimeButton>
      {isShowTimeField && (
        <TimeMenuStyled>
          <Field
            name="time[0]"
            component={SelectTime}
            options={makeTimeOptions("hours")}
            defaultValue={{ value: time[0], label: time[0] }}
          />
          <span>:</span>
          <Field
            name="time[2]"
            component={SelectTime}
            options={makeTimeOptions("minutes")}
            defaultValue={{ value: time[2], label: time[2] }}
          />
          <Field
            name="time[4]"
            component={SelectTime}
            options={makeTimeOptions("ampm")}
            defaultValue={{ value: time[4], label: time[4] }}
            menuShouldScrollIntoView={true}
          />
        </TimeMenuStyled>
      )}
    </TimeFieldWrapper>
  );
};
