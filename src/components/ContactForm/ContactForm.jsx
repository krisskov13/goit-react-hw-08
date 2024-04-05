import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact({ name: values.username, number: values.number }))
      .unwrap()
      .then(() => {
        toast.success("Contact added successfully");
        resetForm();
      })
      .catch(() => {
        toast.error("Error adding contact");
      });
  };

  const FeedbackSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Too short")
      .max(50, "To long")
      .required("Required!"),
    number: Yup.string()
      .min(3, "Too short")
      .max(50, "To long")
      .required("Required!"),
  });

  return (
    <Formik
      initialValues={{
        username: "",
        number: "",
      }}
      validationSchema={FeedbackSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div>
          <p className={css.title}>Add a contact to your phonebook</p>
          <label className={css.text}>Name</label>
          <div className={css.wrapper}>
            <Field className={css.input} type="text" name="username" />
            <ErrorMessage name="username" />
          </div>
        </div>
        <div>
          <label className={css.text}>Number</label>
          <div className={css.wrapper}>
            <Field className={css.input} type="tel" name="number"></Field>
            <ErrorMessage name="number" />
          </div>
        </div>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
