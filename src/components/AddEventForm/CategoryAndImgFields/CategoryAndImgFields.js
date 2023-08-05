import { ErrorMessage, Field } from "formik";
import { categories } from "../../../data/categories";
import { ErrorMessageStyled } from "../ErrorMessage.styled";

export const CategoryAndImgFields = ({ setPicture }) => {
  const onChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      setPicture(reader.result);
    };
  };

  return (
    <div>
      <label htmlFor="category">
        Category
        <Field as="select" name="category">
          <option value="Category">Category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </Field>
        <ErrorMessage name="category" component={ErrorMessageStyled} />
      </label>

      <label htmlFor="picture">
        Add picture
        <Field name="picture" type="file" onChange={onChange} />
        <button type="button" onClick={() => setPicture("")}>
          x
        </button>
      </label>

      <label htmlFor="priority">
        Priority
        <Field as="select" name="priority">
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </Field>
      </label>
    </div>
  );
};
