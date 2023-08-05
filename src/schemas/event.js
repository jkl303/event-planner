import * as Yup from "yup";

export const addEventSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, "Too Short!")
    .matches(/^[aA-zZ\s]+$/, "Invalid input")
    .required("Required"),
  description: Yup.string(),
  date: Yup.string("INVALID DATE"),
  time: Yup.string(),
  location: Yup.string()
    .matches(/^[aA-zZ\s]+$/, "Invalid input")
    .required("Required"),
  category: Yup.string().required("Required"),
  picture: Yup.string(),
  priority: Yup.string(),
});

export const editEventSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, "Too Short!")
    .matches(/^[aA-zZ\s]+$/, "Invalid input"),
  description: Yup.string(),
  date: Yup.string(),
  time: Yup.string(),
  location: Yup.string().matches(/^[aA-zZ\s]+$/, "Invalid input"),
  category: Yup.string(),
  picture: Yup.string(),
  priority: Yup.string(),
});
