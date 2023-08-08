import { useField } from "formik";
import { SelectStyled } from "./Select.styled";

export const SelectField = (props) => {
  const [field, state, { setValue, setTouched }] = useField(props.field.name);

  const onChange = ({ value }) => {
    setValue(value);
  };

  return (
    <SelectStyled
      {...props}
      onChange={onChange}
      onBlur={setTouched}
      classNamePrefix="Select"
      placeholder=""
    />
  );
};
