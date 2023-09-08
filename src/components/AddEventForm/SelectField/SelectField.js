import { useField } from "formik";
import { components } from "react-select";
import { ReactComponent as DropdownIcon } from "../../../images/svg/dropdown.svg";
import { SelectStyled } from "./Select.styled";

export const SelectField = (props) => {
  const [field, state, { setValue, setTouched }] = useField(props.field.name);

  const onChange = ({ value }) => {
    setValue(value);
  };

  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <DropdownIcon />
      </components.DropdownIndicator>
    );
  };

  return (
    <SelectStyled
      {...props}
      classNamePrefix="Select"
      placeholder=""
      components={{ DropdownIndicator }}
      onChange={onChange}
      onBlur={setTouched}
    />
  );
};
