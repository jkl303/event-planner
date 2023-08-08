import { ErrorMessage, Field } from "formik";
import { ErrorMessageStyled } from "../ErrorMessage.styled";
import { ReactComponent as Cross } from "../../../images/svg/cross.svg";
import { InputStyled } from "../Input.styled";

export const DescriptionFields = ({ setFieldValue }) => {
  return (
    <>
      <div>
        <InputStyled htmlFor="title">
          Title
          <Field name="title" type="text" placeholder="Input" />
          <button
            type="button"
            onClick={() => {
              setFieldValue("title", "");
            }}
          >
            <Cross />
          </button>
        </InputStyled>
        <ErrorMessage name="title" component={ErrorMessageStyled} />
      </div>
      <div>
        <InputStyled type="textarea" htmlFor="description" $description>
          Description
          <Field as="textarea" name="description" placeholder="Input" />
          <button
            type="button"
            onClick={() => {
              setFieldValue("description", "");
            }}
          >
            <Cross />
          </button>
        </InputStyled>
        <ErrorMessage name="description" component={ErrorMessageStyled} />
      </div>
    </>
  );
};
