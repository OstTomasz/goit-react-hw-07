import css from "./ContactForm.module.css";

import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

const initialValues = {
  name: "",
  number: "",
};

const Schema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Make it longer")
    .max(50, "Make it shorter")
    .required("Enter name"),
  number: Yup.string()
    .matches("^([0-9]{3}-){2}[0-9]{2}$", "Correct format: xxx-xxx-xx")
    .required("Enter phone number"),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={Schema}
    >
      <Form className="form">
        <div className={css["form-component"]}>
          <label className="label" htmlFor={nameFieldId}>
            Name
          </label>
          <Field
            className="field"
            type="text"
            name="name"
            id={nameFieldId}
            placeholder="John Smith"
          />
          <ErrorMessage
            className={css["error-message"]}
            name="name"
            component="span"
          />
        </div>
        <div className={css["form-component"]}>
          <label className="label" htmlFor={numberFieldId}>
            Number
          </label>
          <Field
            className="field"
            type="tel"
            name="number"
            id={numberFieldId}
            placeholder="xxx-xxx-xx"
          />
          <ErrorMessage
            className={css["error-message"]}
            name="number"
            component="span"
          />
        </div>
        <button className={css["submit-btn"]} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
