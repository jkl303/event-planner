import { ErrorMessage, Field } from "formik";
import { categories } from "../../../data/categories";
import { ErrorMessageStyled } from "../ErrorMessage.styled";
import { SelectField } from "../SelectField/SelectField";
import { ReactComponent as Cross } from "../../../images/svg/cross.svg";
import { ImgFieldStyled } from "./ImgField.styled";

export const CategoryAndImgFields = ({ setPicture }) => {
  const onChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      setPicture(reader.result);
    };
  };

  const categoriesOptions = categories.map((category) => ({
    value: category,
    label: category,
  }));

  const prioritiesOptions = [
    { value: "Low", label: "Low" },
    { value: "Medium", label: "Medium" },
    { value: "High", label: "High" },
  ];

  return (
    <>
      <div>
        <label htmlFor="category">
          Category
          <Field
            name="category"
            component={SelectField}
            isSearchable={false}
            options={categoriesOptions}
            defaultValue={{ value: "Input", label: "Input" }}
          />
        </label>
        <ErrorMessage name="category" component={ErrorMessageStyled} />
      </div>
      <div>
        <ImgFieldStyled htmlFor="picture">
          Add picture
          <Field name="picture" type="file" onChange={onChange} />
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
          Priority
          <Field
            component={SelectField}
            name="priority"
            isSearchable={false}
            options={prioritiesOptions}
            defaultValue={{ value: "Input", label: "Input" }}
            menuPlacement="top"
          />
        </label>
      </div>
    </>
  );
};
