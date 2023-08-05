import { ErrorMessage, Field } from "formik";
import { ErrorMessageStyled } from "../ErrorMessage.styled";

export const DescriptionFields = ({ setFieldValue }) => {
  return (
    <div>
      <label htmlFor="title">
        Title
        <Field name="title" type="text" placeholder="input" />
        <button
          type="button"
          onClick={() => {
            setFieldValue("title", "");
          }}
        >
          x
        </button>
        <ErrorMessage name="title" component={ErrorMessageStyled} />
      </label>

      <label htmlFor="description">
        Description
        <Field name="description" placeholder="input" />
        <button
          type="button"
          onClick={() => {
            setFieldValue("description", "");
          }}
        >
          x
        </button>
        <ErrorMessage name="description" component={ErrorMessageStyled} />
      </label>
    </div>
  );
};
