import { ErrorMessage, Field } from "formik";
import { categoriesOptions } from "../../../data/categories";
import { prioritiesOptions } from "../../../data/priorities";
import { SelectField } from "../SelectField/SelectField";
import { ReactComponent as Cross } from "../../../images/svg/cross.svg";
import { ErrorMessageStyled } from "../ErrorMessage.styled";
import { ImgFieldStyled } from "./ImgField.styled";

export const CategoryAndImgFields = ({ setPicture, values }) => {
  const onChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      setPicture(reader.result);
    };
  };

  return (
    <>
      <div>
        <label htmlFor="category">
          <p>Category</p>
          <Field
            name="category"
            component={SelectField}
            isSearchable={false}
            options={categoriesOptions}
            defaultValue={
              values
                ? { value: values.category, label: values.category }
                : {
                    value: "Input",
                    label: "Input",
                  }
            }
          />
        </label>
        <ErrorMessage name="category" component={ErrorMessageStyled} />
      </div>
      <div>
        <ImgFieldStyled htmlFor="picture">
          <p>Add picture</p>
          <Field
            name="picture"
            type="file"
            onChange={onChange}
            placeholder="Input"
          />
          <div>
            <span>Input</span>
          </div>
          <button type="button" onClick={() => setPicture("")}>
            <Cross />
          </button>
        </ImgFieldStyled>
      </div>

      <div>
        <label htmlFor="priority">
          <p>Priority</p>
          <Field
            component={SelectField}
            name="priority"
            isSearchable={false}
            options={prioritiesOptions}
            defaultValue={
              values
                ? { value: values.priority, label: values.priority }
                : {
                    value: "Input",
                    label: "Input",
                  }
            }
          />
        </label>
      </div>
    </>
  );
};
