import { Form, Formik } from "formik";
import { addEventSchema } from "../../schemas/event";
import { useDispatch } from "react-redux";
import { addEvent } from "../../redux/events/eventsSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { DescriptionFields } from "./DescriptionFields/DescriptionFields";
import { TimeAndLocationFields } from "./TimeAndLocationFields/TimeAndLocationFields";
import { CategoryAndImgFields } from "./CategoryAndImgFields/CategoryAndImgFields";

export const AddEventForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [date, setDate] = useState(new Date() || null);
  const [time, setTime] = useState(
    new Date().getHours() + ":" + new Date().getMinutes() || null
  );
  const [picture, setPicture] = useState("");

  const initialValues = {
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    category: "",
    picture: "",
    priority: "Low",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={addEventSchema}
      onSubmit={(values, { resetForm, setSubmitting }) => {
        values.date = date.toLocaleDateString("en-CA").slice(0, 10);
        values.time = time;
        values.picture = picture;
        dispatch(addEvent(values));
        resetForm();
        setSubmitting(false);
        navigate("/", { replace: true });
      }}
    >
      {({ setFieldValue }) => (
        <Form>
          <DescriptionFields setFieldValue={setFieldValue} />
          <TimeAndLocationFields
            setDate={setDate}
            setTime={setTime}
            setFieldValue={setFieldValue}
          />
          <CategoryAndImgFields setPicture={setPicture} />
          <button type="submit">Add event</button>
        </Form>
      )}
    </Formik>
  );
};
