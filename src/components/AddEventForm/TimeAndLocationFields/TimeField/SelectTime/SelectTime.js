import { useField } from "formik";
import { SelectTimeStyled } from "./SelectTime.styled";

export const SelectTime = (props) => {
  const [field, state, { setValue }] = useField(props.field.name);

  const onChange = ({ value }) => {
    setValue(value);
  };

  return (
    <SelectTimeStyled
      {...props}
      classNamePrefix="Select"
      isSearchable={false}
      menuIsOpen={true}
      onChange={onChange}
    />
  );
};
