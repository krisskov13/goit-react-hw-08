import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          <span className={css.span}>Username</span>
          <Field className={css.input} type="text" name="name" />
        </label>
        <label className={css.label}>
          <span className={css.span}>Email</span>
          <Field className={css.input} type="email" name="email" />
        </label>
        <label className={css.label}>
          <span className={css.span}>Password</span>
          <Field className={css.input} type="password" name="password" />
        </label>
        <button className={css.btn} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
}
