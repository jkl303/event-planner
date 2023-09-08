import { ErrorMessage, Field } from "formik";
import { ReactComponent as Cross } from "../../../images/svg/cross.svg";
import { InputStyled } from "../Input.styled";
import { ErrorMessageStyled } from "../ErrorMessage.styled";

export const DescriptionFields = ({ setFieldValue }) => {
  return (
    <>
      <div>
        <InputStyled htmlFor="title">
          <p>Title</p>
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
          <p>Description</p>
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
