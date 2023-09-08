import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import { addEvent, editEvent } from "../../redux/events/eventsSlice";
import { selectEventById } from "../../redux/events/selectors";
import { addEventSchema, editEventSchema } from "../../schemas/event";
import { DescriptionFields } from "./DescriptionFields/DescriptionFields";
import { TimeAndLocationFields } from "./TimeAndLocationFields/TimeAndLocationFields";
import { CategoryAndImgFields } from "./CategoryAndImgFields/CategoryAndImgFields";
import {
  AddButton,
  AddEventFormStyled,
  FlexContainer,
} from "./AddEventForm.styled";

export const AddEventForm = ({ edit }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const event = useSelector((state) => selectEventById(state, id));
  const [picture, setPicture] = useState("");

  const time = edit && [
    event.time.slice(0, 2),
    ":",
    event.time.slice(3, 5),
    " ",
    event.time.slice(6, 8),
  ];

  const existentEvent = {
    ...event,
    time,
    picture: "",
  };

  const initialValues = {
    title: "",
    description: "",
    date: "",
    time: ["01", ":", "00", " ", "AM"],
    location: "",
    category: "",
    picture: "",
    priority: "",
  };

  return (
    <Formik
      initialValues={edit ? existentEvent : initialValues}
      validationSchema={edit ? editEventSchema : addEventSchema}
      onSubmit={(values, { resetForm, setSubmitting }) => {
        values.picture = picture;

        values.time = values.time.join("");

        edit ? dispatch(editEvent(values)) : dispatch(addEvent(values));
        resetForm();
        setSubmitting(false);
        navigate("/", { replace: true });
      }}
    >
      {({ setFieldValue, values }) => (
        <AddEventFormStyled>
          <FlexContainer>
            <DescriptionFields setFieldValue={setFieldValue} />
            <TimeAndLocationFields
              setFieldValue={setFieldValue}
              values={values}
            />
            <CategoryAndImgFields
              setPicture={setPicture}
              values={edit ? values : null}
            />
          </FlexContainer>
          <AddButton type="submit">{edit ? "Save" : "Add event"}</AddButton>
        </AddEventFormStyled>
      )}
    </Formik>
  );
};
