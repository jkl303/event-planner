import { Formik } from "formik";
import { addEventSchema } from "../../schemas/event";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { DescriptionFields } from "./DescriptionFields/DescriptionFields";
import { TimeAndLocationFields } from "./TimeAndLocationFields/TimeAndLocationFields";
import { CategoryAndImgFields } from "./CategoryAndImgFields/CategoryAndImgFields";
import { AddEventFormStyled, FlexContainer } from "./AddEventForm.styled";
import { ButtonBigStyled } from "../../styles/ButtonBig.styled";
import { useDispatch } from "react-redux";
import { addEvent } from "../../redux/events/eventsSlice";

export const AddEventForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    priority: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={addEventSchema}
      onSubmit={(values, { resetForm, setSubmitting }) => {
        values.time = time;
        values.picture = picture;
        dispatch(addEvent(values));
        resetForm();
        setSubmitting(false);
        navigate("/", { replace: true });
      }}
    >
      {({ setFieldValue }) => (
        <AddEventFormStyled>
          <FlexContainer>
            <DescriptionFields setFieldValue={setFieldValue} />
            <TimeAndLocationFields
              setTime={setTime}
              setFieldValue={setFieldValue}
            />
            <CategoryAndImgFields setPicture={setPicture} />
          </FlexContainer>
          <ButtonBigStyled type="submit">Add event</ButtonBigStyled>
        </AddEventFormStyled>
      )}
    </Formik>
  );
};
